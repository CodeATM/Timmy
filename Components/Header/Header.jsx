'use client'

import React, {useState} from 'react'
import './Header.css'
import Link from 'next/link'
import { FaCross } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { PiHandbagLight } from 'react-icons/pi'
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import { LiaToolsSolid } from 'react-icons/lia'
import { BsSend } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'
const Header = () => {
    const [Toggle, showMenu] = useState(false)

  return (
<header className="header">
    <nav className="container nav">
        <Link href= '/'  className="nav_logo">Timmy</Link>

        <div className= {Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
            <ul className="nav_list grid">
                <li className="nav_item">
                    <Link href ='' className="nav_link">
                        <AiOutlineHome className='nav_icon'/>
                         Home
                    </Link>
                </li>

                <li className="nav_item">
                    <Link href ='' className="nav_link">
                        <BiUser className='nav_icon'/>
                         About
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href ='' className="nav_link">
                        <LiaToolsSolid className='nav_icon'/>
                         Skills
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href ='' className="nav_link">
                        <PiHandbagLight className='nav_icon'/>
                         Services
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href ='' className="nav_link">
                        <BsSend className='nav_icon'/>
                         contact
                    </Link>
                </li>
            </ul>

            <MdOutlineCancel className='nav_close' onClick = {() => showMenu(!Toggle)}/>
        </div>

        <div className="nav_toggle" onClick = {() => showMenu(!Toggle)}>
            <AiOutlineMenu/>
        </div>
    </nav>
</header>
  )
}

export default Header