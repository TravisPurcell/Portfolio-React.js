import styles from '../styles/Lamp.module.scss';

function Lamp() {

  return (

    <section id="lamp" className={styles.lamp}>
      <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2>PHP/SQL Demo</h2>
              <h3>To-Do App</h3>
              <div className={styles.link__wrapper}>
                <p><a href="https://github.com/TravisPurcell/ToDo/tree/main/themes/todo" target="_blank">Click to View Github Repo</a></p>
              </div>
              <iframe width="100%" src="https://tnp-portfolio.com/php-demo"></iframe>
            </div>
          </div>
        </div>
    </section>
    
  );
}

export default Lamp();