import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "motion/react"

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-50}}
            transition={{duration:0.1}}
            className='my-10 text-center text-4xl'>Contact</motion.h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#' className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}
