import styles from '../styles/Summary.module.scss';

function Summary() {

  return (

    <section className="content content-1">
    <div className="container-xl">
      <div className="row">
        <div className="col-12">
          <h2 className="title">Professional Summary</h2>
          <p className="typewriter">Self-driven React.js Developer, specializing in Next.js.</p> 
          <ul>
            <li>Four+ years of total experience.</li>
            <li>Custom PHP & WordPress theme & module development.</li>
            <li>Responsive & Mobile-first.</li>
            <li>Git version control & collaboration.</li>
            <li>WCAG accessibility standards.</li>
            <li>Speed & security optimization.</li>
            <li>Leadership & adaptability.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    
  );
}

export default Summary();