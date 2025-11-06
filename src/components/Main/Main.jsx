import React from 'react';
import PropTypes from 'prop-types';
import { ReactTyped } from 'react-typed';
import styles from './Main.module.css';
import Btn from '../Button/Btn';
import avatar from '../../assets/avatar.png';

Main.propTypes = {

};

function Main(props) {
    return (
        <div id="home" className={styles.main_container}>
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

                <div className={styles.btn_container}>
                    <Btn className={styles.cv_btn}>View CV</Btn>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.github_icon}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <div className={styles.intro_image}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default Main;