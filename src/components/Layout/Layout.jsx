import React, { useState } from 'react';
import styles from './Layout.module.css';



function Layout() {
    const [activeSection, setActiveSection] = useState('home');
    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'project', 'contacts'];

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (sectionId) => {
        // Cập nhật trạng thái phần đang được chọn
        setActiveSection(sectionId);

        // Tìm phần tử có id tương ứng trong trang
        const targetElement = document.getElementById(sectionId);

        // Nếu tìm thấy thì cuộn mượt đến phần đó
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.main_container}>
            <header className={styles.container}>
                <h1 className={styles.logo}>HOANGTRUNGPHONG</h1>
                <nav className={styles.navLinks}>
                    <a
                        href="#home"
                        onClick={() => handleClick("home")}
                        className={`${styles.link} ${activeSection === "home" ? styles.active : ""}`}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={() => handleClick("about")}
                        className={`${styles.link} ${activeSection === "about" ? styles.active : ""}`}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={() => handleClick("skills")}
                        className={`${styles.link} ${activeSection === "skills" ? styles.active : ""}`}
                    >
                        Skills
                    </a>

                    <a
                        href="#project"
                        onClick={() => handleClick("project")}
                        className={`${styles.link} ${activeSection === "project" ? styles.active : ""}`}
                    >
                        Project
                    </a>

                    <a
                        href="#contacts"
                        onClick={() => handleClick("contacts")}
                        className={`${styles.link} ${activeSection === "contacts" ? styles.active : ""}`}
                    >
                        Contacts
                    </a>

                </nav>
            </header>
        </div>
    );
}

export default Layout;