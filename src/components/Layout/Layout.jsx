import styles from './Layout.module.css';

function Layout() {
    return (
        <div>
            <header className={styles.container}>
                <h1 className={styles.logo}>HOANGTRUNGPHONG</h1>
                <nav className={styles.navLinks}>
                    <a href="#home" >Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Project</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>
        </div>
    );
}

export default Layout;