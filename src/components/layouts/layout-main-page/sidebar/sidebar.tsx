import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

import { BookCategory, booksCategories } from '../../../../mocks/mock';
import { BOOKS_ROUTE, CONTRACT_PAGE_ROUTE, HOME_PAGE_ROUTE, TERMS_PAGE_ROUTE } from '../../../../utils';
import { Htag } from '../../../common/htag/htag';

import { SidebarProps } from './sidebar.props';

import styles from './sidebar.module.css';

export type MenuType = 'books' | 'terms' | 'contract';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
    const { category: currentCategory } = useParams();
    const currentMenu = useLocation().pathname.split('/')[1];

    const renderSecondLevelMenu = () =>
        booksCategories.map(({ name, label, count }: BookCategory) => (
            <li key={name}>
                <Link
                    to={`${BOOKS_ROUTE}/${name}`}
                    className={cn(styles.category, {
                        [styles.secondLevelActive]: currentCategory === name,
                    })}
                >
                    {label}
                </Link>{' '}
                <span className={styles.count}>{count}</span>
            </li>
        ));

    const renderedSecondLevelMenu = renderSecondLevelMenu();

    return (
        <nav className={cn(className, styles.sidebar)} {...props}>
            <ul className={styles.firstLevelMenu}>
                <li>
                    <Htag
                        tag='h5'
                        className={cn({
                            [styles.firstLevelActive]: currentMenu === 'books',
                        })}
                    >
                        <Link to={HOME_PAGE_ROUTE}>Витрина книг </Link>
                    </Htag>
                    <ul className={styles.secondLevelMenu}>
                        <li>
                            <Link
                                to={`${BOOKS_ROUTE}/all`}
                                className={cn(styles.category, {
                                    [styles.secondLevelActive]: currentCategory === 'all',
                                })}
                            >
                                {currentCategory === 'all' ? (
                                    <Htag
                                        className={cn(styles.category, {
                                            [styles.secondLevelActive]: currentCategory === 'all',
                                        })}
                                        tag='h5'
                                    >
                                        Все книги
                                    </Htag>
                                ) : (
                                    'Все книги'
                                )}
                            </Link>
                        </li>
                        {renderedSecondLevelMenu}
                    </ul>
                </li>
                <li>
                    <Htag
                        tag='h5'
                        className={cn({
                            [styles.firstLevelActive]: currentMenu === 'terms',
                        })}
                    >
                        <Link to={TERMS_PAGE_ROUTE}>Правила пользования </Link>
                    </Htag>
                </li>
                <li>
                    <Htag
                        tag='h5'
                        className={cn({
                            [styles.firstLevelActive]: currentMenu === 'contract',
                        })}
                    >
                        <Link to={CONTRACT_PAGE_ROUTE}>Договор оферты</Link>
                    </Htag>
                </li>
            </ul>
        </nav>
    );
};
