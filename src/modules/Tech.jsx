import styles from '../styles/Tech.module.scss';

function Tech() {

  return (
    <section className={styles.icons}>
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <h2>Technological</h2>
            <h3 className="fadeIn">Proficiencies</h3>
            <div className={styles.ico__Wrapper}>
              <div className={styles.stack__wrapper}>
                <div className={`${styles.icon} ${styles.icon1} fadeIn`}>
                  <div className={styles.img__wrapper}>
                    <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/html.svg"/>
                  </div>
                  <p>HTML</p>
                </div>
                <div className={`${styles.icon} ${styles.icon2} fadeIn`}>
                  <div className={styles.img__wrapper}>
                    <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/css.svg"/>
                  </div>
                  <p>CSS</p>
                </div>
                <div className={`${styles.icon} ${styles.icon3} fadeIn`}>
                  <div className={styles.img__wrapper}>
                    <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/js.svg"/>
                  </div>
                  <p>JS</p>
                </div>
              </div>
              <div className={`${styles.stack__wrapper} ${styles.stack__wrapper2}`}>
                <a href="#lamp">
                <div className={`${styles.icon} ${styles.icon4} fadeIn`}>
                    <div className={styles.img__wrapper}>
                      <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/php.svg"/>
                    </div>
                    <p>PHP</p>
                  </div>
                </a>
                <a href="#lamp">
                <div className={`${styles.icon} ${styles.icon5} fadeIn`}>
                    <div className={styles.img__wrapper}>
                      <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/sql.svg"/>
                    </div>
                    <p>SQL</p>
                  </div>  
                </a>
                <a href="#wp">
                <div className={`${styles.icon} ${styles.icon6} fadeIn`}>
                    <div className={styles.img__wrapper}>
                      <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/wp.svg"/>
                    </div>
                    <p>WP</p>
                  </div>
                </a>
              </div>
              <div className={`${styles.stack__wrapper} ${styles.stack__wrapper3}`}>
                <div className={`${styles.icon} ${styles.icon7} fadeIn`}>
                  <div className={styles.img__wrapper}>
                    <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/react.svg"/>
                  </div>
                  <p>React.js</p>
                </div>
                <div className={`${styles.icon} ${styles.icon8} fadeIn`}>
                  <div className={styles.img__wrapper}>
                    <img className={`${styles.item} img-fluid`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/nextjs.svg"/>
                  </div>
                  <p>Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech();