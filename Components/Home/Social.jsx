import React from 'react'
import Link from 'next/link'
import { FiGithub, FiTwitter, } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'

const Social = () => {
  return (
    <div className="home_social">
        <Link href ='https://github.com/CodeATM' target = '_blank' className ='home_social-icon'>
            <FiGithub className ='home_social-icon'/>
        </Link>
        <Link href ='https://twitter.com/MatthewOlu86153?t=sXOxcXoje1QDo0g40K3lfQ&s=09' target = '_blank' >
            <FiTwitter className ='home_social-icon'/>
        </Link>
        <Link href ='https://www.linkedin.com/in/awe-oluwatimileyin-936426248' target = '_blank' className ='home_social-icon'>
            <AiFillLinkedin className ='home_social-icon'/>
        </Link>
    </div>
  )
}

export default Social