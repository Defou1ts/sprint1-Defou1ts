import { Outlet } from 'react-router-dom';

import { Footer } from './footer/footer';
import { Header } from './header/header';

import styles from './layout.module.css';

export const Layout = () => (
    <div className={styles.wrapper}>
        <Header className={styles.header} />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer className={styles.footer} />
    </div>
);
