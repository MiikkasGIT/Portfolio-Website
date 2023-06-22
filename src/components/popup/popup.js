import React from 'react'
import "./popup.css"
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'


const popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='inner-popup'>
            <motion.button whileHover={{rotate:100}} initial="hidden" animate="visible" transition={{delay: 0, type:'spring', stiffness: 100}} onClick={() => props.setTrigger(false)} className='close-btn'><ImCross/></motion.button>
            { props.children }
        </div>
    </div>
  ) : "";
}


export default popup