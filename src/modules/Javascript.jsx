import styles from '../styles/Javascript.module.scss';

import Clicker from './Clicker';

function Javascript() {
    
      return (
        <div>
              <section id="js" className={styles.js}>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                          <h2>HTML/CSS/JS Demo</h2>
                          <h3>Click Counter App</h3>
                          <div className={styles.link__wrapper}>
                              <p><a href="https://github.com/TravisPurcell/ToDo" target="_blank">Click to View Github Repo</a></p>
                          </div>
                            <Clicker></Clicker>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Javascript();