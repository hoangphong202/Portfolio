import React from 'react';
import PropTypes from 'prop-types';
import { ReactTyped } from 'react-typed';
import styles from './Main.module.css';

Main.propTypes = {

};

function Main(props) {
    return (
        <div>
            <div className={styles.container}>
                <p className={styles.hello}>Hello, I'm <span>Hoang Trung Phong</span></p>

                <h2 className={styles.title}>
                    I'm a{" "}
                    <span>
                        <ReactTyped
                            strings={["Designer", "Developer"]}
                            typeSpeed={100}
                            backSpeed={60}
                            backDelay={1500} // thời gian dừng trước khi xóa (ms)
                            loop
                        />
                    </span>
                </h2>

                <p className={styles.description}>
                    I am a technology and design enthusiast, always looking to create products that not only work well
                    but also have high aesthetics. I am capable of working in both Front-end and Back-end,
                    love to continuously learn and wish to develop my career in Japan.
                </p>

                <div className="buttons">
                    <button className="cv-btn">View CV</button>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-icon">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
}

export default Main;