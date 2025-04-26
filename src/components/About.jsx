import aboutImg from "../assets/realprofile.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-8 text-center text-4xl">
            About Me
            <span className="text-neutral-500"></span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-4xl" src={aboutImg} width={400} height={400} alt="img"/>
                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-lg">{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About