import cn from 'classnames';

import { SidebarProps } from './sidebar.props';

import styles from './sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps) => (
    <nav className={cn(className, styles.sidebar)} {...props}>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </nav>
);
