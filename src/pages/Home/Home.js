import React from "react"
import './Home.css'
import Top from "../../components/Top/Top";
import { Helmet } from 'react-helmet';
import { FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BackgroundParticles from '../../particles'


const Variants = {
    hidden: {
        x: '-50px'
    },
    visible: {
        x: '0'
    }
}

const RedirectPage = () => {
    React.useEffect(() => {
        window.location.replace('https://www.instagram.com')
    }, [])
}


const Home = () => {
  return (
    <>
<section className='Home'>

    <Helmet>
        <title>Miikka Koensler | Home</title>
    </Helmet>

    <BackgroundParticles/>

    <Top />
    <div className="navigation">
        <Link to="/about" className="item item1">
              <motion.h1
                className="title">Über mich</motion.h1>
              <span
              className="subtitle">Hier erfährst du mehr über meine Person.</span>
          </Link>


          <Link to="/projekte" className="item item2">
              <h1 className="title">Projekte</h1>
              <span className="subtitle">Hier erfährst du mehr über meine Arbeit.</span>
          </Link>
          <Link to="/Kontakt" className="item item3">
              <h1 className="title">Kontakt</h1>
              <span className="subtitle">Hier kannst du mich kontaktieren.</span>
          </Link>
      </div>

      <div className="social-media">
              <ul className="social-list">
                  <motion.li variants={Variants} whileHover={{scale:1.1}} initial="hidden"  animate="visible" transition={{delay: 0, type:'spring', stiffness: 100}}  className="social-icon"><Link to={RedirectPage}><FaInstagram/></Link></motion.li>
                  <motion.li variants={Variants} whileHover={{scale:1.1}} initial="hidden" animate="visible" transition={{delay: 0.01, type:'spring', stiffness: 100}} className="social-icon"><Link to="/"><FaDiscord/></Link></motion.li>
                  <motion.li variants={Variants} whileHover={{scale:1.1}} initial="hidden" animate="visible" transition={{delay: 0.02, type:'spring', stiffness: 100}} className="social-icon"><Link to="/"><FaTwitter/></Link></motion.li>
              </ul>
          </div>
    </section>
    </>
  )
}

export default Home
