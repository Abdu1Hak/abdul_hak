import {RiReactjsLine} from "react-icons/ri"
import python from "../assets/Skills/python.png"
import js from "../assets/Skills/js.png"
import rbflask from "../assets/Skills/rbflask.png"
import html from "../assets/Skills/html.png"
import css from "../assets/Skills/css.png"
import arduino from "../assets/Skills/arduino.png"
import githubIcon from "../assets/Skills/githubIcon.png"
import tailwind from "../assets/Skills/tailwind.png"

import { motion } from "motion/react"

const iconVariant = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Tech() {
  return (
    <div className='flex flex-col items-center border-b border-neutral-800 pb-24'>
  {/* Title Row */}
  <motion.h2 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    className='my-10 text-center text-4xl'
  >
    Tech Skills
  </motion.h2>

  {/* Languages Row */}
  <div className='flex flex-wrap justify-center gap-4 mb-10'>
        <motion.div
        variants={iconVariant(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={python} alt="Python" className="w-16 h-18 object-contain mx-auto" />
        <p className="flex justify-center my-1">Python</p>
        </motion.div>

        <motion.div
        variants={iconVariant(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-1'
        >
        <img src={js} alt="JS" className="w-26 h-26 object-contain mx-auto" />
        <p className="flex justify-center my-1">JavaScript</p>
        </motion.div>

        <motion.div
        variants={iconVariant(4.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={html} alt="HTML" className="w-18 h-16 object-contain mx-auto" />
        <p className="flex justify-center mt-4 mb-0">HTML</p>
        </motion.div>

        <motion.div
        variants={iconVariant(4.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={css} alt="HTML" className="w-18 h-16 object-contain mx-auto" />
        <p className="flex justify-center mt-4 mb-0">CSS</p>
        </motion.div>
    </div>

    {/* Frameworks/Tools Row */}
    <div className='flex flex-wrap justify-center gap-4'>
        <motion.div
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <RiReactjsLine className="text-7xl text-cyan-400 mx-auto" />
        <p className="flex justify-center my-1">React</p>
        </motion.div>

        <motion.div
        variants={iconVariant(3.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-1'
        >
        <img src={rbflask} alt="Flask" className="w-26 h-25 object-contain mx-auto" />
        <p className="flex justify-center my-1">Flask</p>
        </motion.div>

        <motion.div
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={tailwind} alt="Tailwind CSS" className="w-18 h-16 object-contain mx-auto" />
        <p className="flex justify-center mt-4 mb-0">Tailwind CSS</p>
        </motion.div>

        <motion.div
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={arduino} alt="Tailwind CSS" className="w-18 h-16 object-contain mx-auto" />
        <p className="flex justify-center mt-4 mb-0">Arduino IDE</p>
        </motion.div>

        <motion.div
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'
        >
        <img src={githubIcon} alt="Tailwind CSS" className="w-18 h-16 object-contain mx-auto" />
        <p className="flex justify-center mt-4 mb-0">Git/Github</p>
        </motion.div>
    </div>
    </div>
  )
}
