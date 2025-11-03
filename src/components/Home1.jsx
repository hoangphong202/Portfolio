import React from "react";
import "./Home.css";
import avatar from "../assets/avatar.png";
import { ReactTyped } from "react-typed";

function Home() {
    return (
        <div className="home-container">
            <header className="navbar">
                <h1 className="logo">HOANGTRUNGPHONG</h1>
                <nav className="nav-links">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Project</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>

            <section className="intro">
                <div className="intro-text">
                    <p className="hello">Hello, I'm <span>Hoang Trung Phong</span></p>

                    <h2 className="title">
                        I'm a{" "}
                        <span className="highlight">
                            <ReactTyped
                                strings={["Designer", "Developer"]}
                                typeSpeed={100}
                                backSpeed={60}
                                loop
                            />
                        </span>
                    </h2>


                    <p className="description">
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

                <div className="intro-image">
                    <img src={avatar} alt="avatar" />
                </div>
            </section>
        </div>
    );
}

export default Home;
