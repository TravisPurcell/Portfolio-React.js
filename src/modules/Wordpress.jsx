import styles from '../styles/Wordpress.module.scss';

function Wordpress() {

  return (

    <section id="wp" className={`${styles.wp} content content-2`}>
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="flex__wrapper">
              <h2>WordPress Demos</h2>
              <p><a href="https://cd.citizensbank24.com/" target="_blank">Citizens Bank | CD</a></p>
              <p><a href="https://business.citizensbank24.com/" target="_blank">Citizens Bank | Business</a></p>
              <p><a href="https://capabipties.thepghtstreamgroup.com/" target="_blank">The Lightstream Group | Capabilities</a></p>
              <p><a href="https://spatialbusiness.com/" target="_blank">Spatial Business</a></p>
              <p><a href="https://www.y12investmentpartners.com/" target="_blank">Y12 Investment Partners</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Wordpress();