import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { BookCategory, booksCategories } from '../../../../mocks/mock';
import { BOOKS_ROUTE, CONTRACT_PAGE_ROUTE, TERMS_PAGE_ROUTE } from '../../../../utils';
import { Htag } from '../../../common/htag/htag';

import { SidebarProps } from './sidebar.props';

import styles from './sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
    const { category: currentCategory } = useParams();

    const renderSecondLevelMenu = () =>
        booksCategories.map(({ category, count }: BookCategory) => (
            <li key={category}>
                <Link
                    to={`${BOOKS_ROUTE}/${category}`}
                    className={cn(styles.category, {
                        [styles.active]: currentCategory === category,
                    })}
                >
                    {category}
                </Link>{' '}
                <span className={styles.count}>{count}</span>
            </li>
        ));

    const renderedSecondLevelMenu = renderSecondLevelMenu();

    return (
        <nav className={cn(className, styles.sidebar)} {...props}>
            <ul className={styles.firstLevelMenu}>
                <li>
                    <Htag tag='h5'>Витрина книг</Htag>
                    <ul className={styles.secondLevelMenu}>
                        <li>
                            <Link
                                to={`${BOOKS_ROUTE}/all`}
                                className={cn(styles.category, {
                                    [styles.active]: currentCategory === 'all',
                                })}
                            >
                                Все книги
                            </Link>{' '}
                        </li>
                        {renderedSecondLevelMenu}
                    </ul>
                </li>
                <li>
                    <Htag tag='h5'>
                        <Link to={TERMS_PAGE_ROUTE}>Правила пользования </Link>
                    </Htag>
                </li>
                <li>
                    <Htag tag='h5'>
                        <Link to={CONTRACT_PAGE_ROUTE}>Договор оферты</Link>
                    </Htag>
                </li>
            </ul>
        </nav>
    );
};
