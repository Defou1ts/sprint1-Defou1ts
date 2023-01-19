import { Outlet } from 'react-router-dom';

import { Header } from './header/header';

import styles from './layout.module.css';

export const Layout = () => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />
    <main className={styles.body}>
      <Outlet />
    </main>
    <footer className={styles.footer}>Footer</footer>
  </div>
);
