import React from 'react'
import Link from 'next/link'
import { FiGithub, FiTwitter, } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'

const Social = () => {
  return (
    <div className="home_social">
        <Link href ='' target = '_blank' className ='home_social-icon'>
            <FiGithub className ='home_social-icon'/>
        </Link>
        <Link href ='' target = '_blank' >
            <FiTwitter className ='home_social-icon'/>
        </Link>
        <Link href ='' target = '_blank' className ='home_social-icon'>
            <AiFillLinkedin className ='home_social-icon'/>
        </Link>
    </div>
  )
}

export default Social