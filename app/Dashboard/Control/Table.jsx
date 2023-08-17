import React, { useEffect, useState } from "react";
import { FiTrash, FiCopy } from "react-icons/fi";
import Image from 'next/image'

const Table = ({ toggleTab }) => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();

    setAllPosts(data);
    console.log(allPosts);
  };

  const handleDelete = async  (id) => {
    try {
      const response = await fetch(`/api/projects/[id]/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        console.log('item deleted')
      } else {
        console.log('fail to delete item')
      }
    } catch (error) {
      console.error('error while deleting item', error)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="table_responsive section container">
      <table className="" width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>
              <span class="las la-sort"></span> Project Name
            </th>
            <th>
              <span class="las la-sort"></span> Category
            </th>
            <th>
              <span class="las la-sort"></span> Github
            </th>
            <th>
              <span class="las la-sort"></span> Hosted Link
            </th>
            <th>
              <span class="las la-sort"></span> ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {allPosts.map((allPosts) => (
            <tr key ={allPosts._id}>
              <td>
                <Image src = {allPosts.image} width ={40} height ={40} alt = 'project-image'/>
              </td>
              <td>
                <div class="client">
                  <div class="client-img bg-img"></div>
                  <div class="client-info">
                    <h4>{allPosts.name}</h4>
                  </div>
                </div>
              </td>
              <td>{allPosts.category}</td>
              <td>{allPosts.github}</td>
              <td>{allPosts.hostedlink}</td>
              <td>
                <div class="actions">
                  <FiTrash onClick ={() => handleDelete(allPosts._id)}/>
                  <FiCopy />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button button-control" onClick={() => toggleTab(1)}>
        Add Project
      </div>
    </div>
  );
};

export default Table;
