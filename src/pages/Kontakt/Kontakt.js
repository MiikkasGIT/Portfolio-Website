import React, { useRef } from 'react'
import './Kontakt.css'
import Top from "../../components/Top/Top";
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import BackgroundParticles from '../../particles'



export const Kontakt = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2f1wxop', 'template_sy3mg2d', form.current, '1QNjjyiQHy43s9anN')
          .then((result) => {
              console.log(result.text);
              window.location.reload();
          }, (error) => {
              console.log(error.text);

          });
      };


  return (
    <>
    <Helmet>
        <title>Miikka Koensler | Kontakt</title>
    </Helmet>



<Top/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 className='title'>Kontakt</h1>
<br/><hr/>
<br/><br/><br/>
    <div className="Kontakt">
        <div className="contact-information">
                <h2>Miikka Koensler</h2>
                <p>koensler.miikka@gmail.com</p>
                <p>+49 174 3498108</p>
                <br/>
                <hr/>
                <br/>
                <p>Clemensstraße 1B</p>
                <p>49090 Osnabrück</p>
            </div>

            <div className="contact-formular">
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder="Name"/>

                    <input type="text" name='vorname' placeholder="Vorname"/>

                    <input type="email" name='email' placeholder="E-Mail"/>

                    <input type="text" name='telefon' placeholder="Telefon"/>

                    <textarea name='text' placeholder="Schreibe mir etwas..." ></textarea>

                    <br/>
                    <motion.input whileHover={{ backgroundColor: "#04AA6D", color: "white", y: -5}} type="submit" value="Senden"/>

                </form>
            </div>
        </div>
        <BackgroundParticles/>
    </>
  )
}

export default Kontakt
