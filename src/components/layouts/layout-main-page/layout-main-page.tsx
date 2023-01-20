import { Outlet } from 'react-router-dom';

import { Sidebar } from './sidebar/sidebar';

import styles from './layout-main-page.module.css';

export const LayoutMainPage = () => (
    <div className={styles.layout}>
        <Sidebar className={styles.sidebar} />
        <Outlet />
    </div>
);
