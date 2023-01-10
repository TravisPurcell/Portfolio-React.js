import React, {useState} from 'react';

import styles from '../styles/Clicker.module.scss';

const Clicker = (props) => {
    const [timer, setTimer] = useState('');

    const timerHandlerTen = (event) => {
        let timer = '10';
        
        document.getElementById('select').innerHTML = 'You\'ve selected ' + timer + ' seconds';
        document.getElementById('select').innerHTML = 'Ready...';

        document.getElementById('select').style.display='block';
        document.getElementById('ready').style.display='block';

        setTimeout(function () {
            document.getElementById('select').innerHTML = 'Set...';
        }, 1000);
        setTimeout(function () {
            document.getElementById('select').style.display='none';
            document.getElementById('ready').style.display='none';
            start();
        }, 2000); // Start timer and enable click 
    
        function start() {
            document.getElementById('ten').style.display='none';
            document.getElementById('twenty').style.display='none';

            document.getElementById('click').style.display='block';
            document.getElementById('time').innerHTML = timer;
            let x = setInterval(function () {
                document.getElementById('time').innerHTML = timer;
                timer--;
    
              if (timer == -1) {
                clearInterval(x);
                document.getElementById('time').innerHTML = 'Time\'s up!';
                end();
              }
            }, 1000);
        } //Click count

        let clicks = 0;
        document.getElementById("click").addEventListener("click", function () {
            clicks++;
        }); //End the game
  
        function end() {
            document.getElementById('click').style.display='none';
            document.getElementById('count').innerHTML = 'You\'ve clicked ' + clicks + ' time(s)';
        }
    };

    const timerHandlerTwenty = (event) => {
        let timer = '20';
   
        document.getElementById('select').innerHTML = 'You\'ve selected ' + timer + ' seconds';
        document.getElementById('select').innerHTML = 'Ready...';

        document.getElementById('select').style.display='block';
        document.getElementById('ready').style.display='block';

        setTimeout(function () {
            document.getElementById('select').innerHTML = 'Set...';
        }, 1000);
        setTimeout(function () {
            document.getElementById('select').style.display='none';
            document.getElementById('ready').style.display='none';
            start();
        }, 2000); // Start timer and enable click 
    
        function start() {
            document.getElementById('ten').style.display='none';
            document.getElementById('twenty').style.display='none';
            document.getElementById('click').style.display='block';
            document.getElementById('time').innerHTML = timer;
            let x = setInterval(function () {
                document.getElementById('time').innerHTML = timer;
                timer--;
    
              if (timer == -1) {
                clearInterval(x);
                document.getElementById('time').innerHTML = 'Time\'s up!';
                end();
              }
            }, 1000);
        } //Click count

        let clicks = 0;
        document.getElementById("click").addEventListener("click", function () {
            clicks++;
        }); //End the game
  
        function end() {
            document.getElementById('click').style.display='none';
            document.getElementById('count').innerHTML = 'You\'ve clicked ' + clicks + ' time(s)';
        }
    };

     return (
        <div>
            <div className={styles.counter__wrapper}>
                <p className={styles.select} id='select'>Test</p>
                <button id="ten" onClick={timerHandlerTen}>10 Seconds</button>
                <button id="twenty" onClick={timerHandlerTwenty}>20 Seconds</button>
                <br/><br/>

                <button className={styles.start} id='start'>Click to start game</button>
                <button className={styles.click} id='click'>Click!</button>

                <h2 className={styles.ready} id='ready'></h2>
                <p className={styles.time} id='time'></p>
                <p className={styles.count} id='count'></p>

                <p className={styles.count} id='count'></p>
            </div>
        </div>
        
    )
};



export default Clicker;