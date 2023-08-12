import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Inputmodal = ({ toggleTab, toggleState }) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    name: "",
    category: "",
    github: "",
    hostedLink: "",
    image: "",
    description: "",
  });

  const handleUpload = async (e) => {
    const selectedImage = e.target.files[0];
    const img = await convertToBase64(selectedImage);
    setPost({ ...post, image: img });
  }


  const createPrompt = async (e) => {
    // e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/projects/new", {
        method: "POST",
        body: JSON.stringify(post)
      });

      if (response.ok) {
        router.push("/Dashboard/Control");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={
        toggleState === 1 ? "service_modal active-modal" : "service_modal"
      }
    >
      <div className="service_modal-content">
        <MdOutlineCancel
          className="inputmodal_modal-close"
          onClick={() => toggleTab(0)}
        />
        <h3 className="inputmodal_title">Add Project to portifolio</h3>
        <form onSubmit={createPrompt}>
          <div className="inputmodal_inputs">
            <div className="inputmodal_form-div">
              <label className="inputmodal_form-tag">Name</label>
              <input
                value={post.name}
                onChange={(e) => setPost({ ...post, name: e.target.value })}
                type="text"
                name="name"
                className="inputmodal_form-input"
                placeholder="Enter project Name"
              />
            </div>
            <div className="inputmodal_form-div">
              <label className="inputmodal_form-tag">Name</label>
              <input
                value={post.description}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
                type="text"
                name="Description"
                className="inputmodal_form-input"
                placeholder="Add Description"
              />
            </div>

            <div className="inputmodal_sub grid">
              <div className="inputmodal_form-div">
                <label className="inputmodal_form-tag">Category</label>
                <input
                  value={post.category}
                  onChange={(e) =>
                    setPost({ ...post, category: e.target.value })
                  }
                  type="text"
                  name="category"
                  className="inputmodal_form-input"
                  placeholder="Category(frontend, backend, fullStack, etc)"
                />
              </div>
              <div className="inputmodal_form-div">
                <input
                  type="file" accept=".jpg, .png, .jpeg" onChange={handleUpload}
                  name="myFile"
                  className="inputmodal_form-input"
                  
                />
              </div>
            </div>

            <div className="inputmodal_sub grid">
              <div className="inputmodal_form-div">
                <label className="inputmodal_form-tag">Github</label>
                <input
                  value={post.github}
                  onChange={(e) => setPost({ ...post, github: e.target.value })}
                  type="text"
                  name="repo"
                  className="inputmodal_form-input"
                  placeholder="Repository"
                />
              </div>
              <div className="inputmodal_form-div">
                <label className="inputmodal_form-tag">Hosted link</label>
                <input
                  value={post.hostedLink}
                  onChange={(e) =>
                    setPost({ ...post, hostedLink: e.target.value })
                  }
                  type="text"
                  name="hostedlink"
                  className="inputmodal_form-input"
                  placeholder="Link"
                />
              </div>
            </div>
          </div>
        </form>

        <button onClick={() => createPrompt()} type="submit" className="button">
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Inputmodal;


function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.oneerror = (error) => {
      reject(error)
    }
  })
}
