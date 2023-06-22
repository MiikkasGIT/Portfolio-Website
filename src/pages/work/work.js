import React, {useState} from 'react';
import "./work.css"
import BackgroundParticles from '../../particles'
import { Helmet } from 'react-helmet';
import Top from "../../components/Top/Top";
import Popuptest from "../../components/popup/popup";
import 'reactjs-popup/dist/index.css';

function Work() {


  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  return (
      <>

      <Helmet>
      <title>Miikka Koensler | Projekte</title>
    </Helmet><BackgroundParticles />
    <Top />


    <section className='work-section'>

    <h1 className='title'>Projekte</h1><hr /><br />

        <div className="work">
        <button onClick={() => setButtonPopup(true)} className='poopup-button'>
          <article className="recent-card">
            <div style={{ backgroundImage: `url(https://i.ibb.co/gmS2wGq/Unbenannt.png)` }} className="recent-card-image text-bottom-left">
              <article-meta>
                <span className="recent-card-title">Freelancer auf Fiverr</span>
                <span className="recent-card-alt-title">Klicke um mehr zu erfahren</span>

              </article-meta>
            </div>
          </article>
        </button>

        <button onClick={() => setButtonPopup2(true)} className='poopup-button'>
          <article className="recent-card">
            <div style={{ backgroundImage: `url(https://i.ibb.co/MhZKQbb/zimmo.png)` }} className="recent-card-image text-bottom-left">
              <article-meta>
                <span className="recent-card-title">Z-Immobilien</span>
                <span className="recent-card-alt-title">Klicke um mehr zu erfahren</span>
              </article-meta>
            </div>
          </article>
        </button>


      </div>

      <Popuptest trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='popup-contentt'>
          <div className='popup-item'>
          <h1>Freelancer auf Fiverr</h1>
          <p>Von 2019-2022 arbeitete ich als Freelancer auf Fiverr und konnte so viel Erfahrung sammeln.</p>
          </div>

          <div className='popup-item'>
          <img alt='img' className='popup-img' src={require('../../assets/img/fiverr.png')} />
          </div>
        </div>
      </Popuptest>

      <Popuptest trigger={buttonPopup2} setTrigger={setButtonPopup2}>
      <div className='popup-contentt'>
          <div className='popup-item'>
          <h1>Z-Immobilien</h1>
          <p>2020 bekam ich den Auftrag die Webseite eines Immobilienmakler neu zu designen.</p>
          </div>

          <div className='popup-item'>
          <img alt='img' className='popup-img' src={require('../../assets/img/zimmo.png')} />
          </div>
        </div>
      </Popuptest>

      </section>
      </>

  )
}
export default Work


