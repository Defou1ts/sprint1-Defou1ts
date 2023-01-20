import cn from 'classnames';

import { BurgerProps } from './burger.props';

import styles from './burger.module.css';

export const Burger = ({ isOpened, className, ...props }: BurgerProps) => (
    <div
        className={cn(className, styles.burger, {
            [styles.isOpened]: isOpened,
        })}
        {...props}
    >
        <span />
    </div>
);
