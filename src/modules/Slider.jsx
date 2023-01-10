import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Slider.module.scss';

function Slider() {

  return (
    <section className={styles.slider}>
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <h2>Years of Experience</h2>
            <Carousel>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Four</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/html.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Four</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/css.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Four</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/js.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Three</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/php.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Three</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/sql.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Four</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/wp.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>Two</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/react.svg"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.slide__wrapper}>
                  <div className={styles.text__wrapper}>
                    <h3 className={styles.h3}>One</h3>
                  </div>
                  <div className={styles.img__wrapper}>
                    <img className="item img-fluid" src="https://tnp-portfolio.com/php-demo/wp-content/uploads/2022/11/nextjs.svg"/>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider();