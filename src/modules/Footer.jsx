import styles from '../styles/Footer.module.scss';

function Footer() {

  return (
    <footer className={styles.footer}>
        
        <div className="container-xl">
        <div className="row justify-center">
            <div className={`${styles.flex__wrapper} col-12`}>
                <div className={styles.img__wrapper}>
                    <a href="/" aria-label="Go to Homepage">
                        <img className={`${styles.footerLogo} logo`} src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/logo.svg" alt="TNP Portfolio Logo."/>
                        </a>
                </div>
                <div className={styles.icon__wrapper}>
                    <a href="https://github.com/TravisPurcell" target="_blank" aria-label="Go to Travis Purcell Github Profile">
                        <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/github-icon.svg"/>
                    </a>
                </div>
            </div>
        </div>
        </div>

    </footer>
    
  );
}

export default Footer();