import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react"

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-30 text-center text-4xl'>Projects</h2>
        <div>{PROJECTS.map((project, index) => {
            return (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center start'>
                <div className='w-full lg:w-1/4'>
                  <img src={project.image} width={150} alt={project.title} className='mb-6 rounded'></img>
                </div>
                <motion.div 
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:1, x:100}}
                  transition={{duration:1}}
                  className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold'>{project.title}</h6>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  {project.technologies.map((tech, index) => {
                    return <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500'>{tech}</span>
                  })}
                </motion.div>
            </div>)
        })}
        </div>
    </div>
  )
}
