import { useParams } from 'react-router-dom';

import { Search, Sort } from '../../components';

import styles from './main.module.css';

export const MainPage = () => {
    const { category } = useParams();

    return (
        <section className={styles.main}>
            <Search isOpened={true} placeholder='Поиск книги или автора…' />
            <Sort />
            <p>.</p>
            <p>type</p>
            <p>type</p>
            <p>main {category}</p>
        </section>
    );
};
