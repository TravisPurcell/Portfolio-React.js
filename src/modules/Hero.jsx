import styles from '../styles/Hero.module.scss';

function Hero() {

  return (

    <section className={styles.hero}>
        <div className="container-xl">
            <div className="row">
                <div className="col-12">
                    <div className={styles.hero__wrapper}>
                        <div className={styles.text__wrapper}>
                            <h1>Travis <br></br>Purcell <br></br>Portfolio</h1>
                            <p className={`${styles.subtitle} underline`}>React.js | Next.js</p>
                            <p className={styles.subtitle}>PHP, SQL, WordPress</p>
                            <p className={styles.subtitle}>Denver, Colorado</p>
                            <div className={styles.icon__wrapper}>
                                <a href="https://github.com/TravisPurcell" target="_blank" aria-label="Go to Travis Purcell Github Profile">
                                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/github-icon.svg"/>
                                </a>
                                <a href="mailto:travis.n.purcell@gmail.com">
                                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/email-icon.svg"/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.img__wrapper}>
                            <img className={`${styles.heroImg} img-fluid`} src="/images/hero.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero();