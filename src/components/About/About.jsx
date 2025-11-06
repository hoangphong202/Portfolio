import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import avatar from '../../assets/avatar.png';
import Btn from '../Button/Btn';
About.propTypes = {

};

function About(props) {
    return (
        <section id="about" className={styles.about_section}>
            <h2 className={styles.title}>About Me</h2>

            <div className={styles.container}>
                <div className={styles.image_wrapper}>
                    <img src={avatar} alt="About" className={styles.image} />
                </div>

                <div className={styles.text_content}>
                    <h3 className={styles.hello}>
                        Hello, I’m <span>Hoang Trung Phong</span>
                    </h3>

                    <p>
                        I am a programmer with a passion for web development, capable of
                        working in both Front-end and Back-end.
                    </p>
                    <p>
                        I have experience using technologies such as ReactJS, Java and
                        proficient in design tools to optimize user interfaces, providing
                        intuitive and friendly experiences.
                    </p>
                    <p>
                        I always strive to learn, improve professional skills as well as
                        creative thinking to create effective, stable and easy-to-use
                        products.
                    </p>
                    <p>
                        I currently have a Japanese level N3 and wish to work in a
                        professional environment in Japan, where I can continue to develop
                        myself, learn new technologies and contribute value to the business.
                    </p>

                    <div className={styles.btn_group}>
                        <Btn className={styles.cv_btn}>View CV</Btn>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.github_icon}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;