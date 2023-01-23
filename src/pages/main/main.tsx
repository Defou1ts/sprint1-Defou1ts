import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Search, Sort, View, ViewType } from '../../components';

import styles from './main.module.css';

export const MainPage = () => {
    const [viewType, setViewType] = useState<View>('list');

    const { category } = useParams();

    return (
        <section className={styles.main}>
            <Search isOpened={true} placeholder='Поиск книги или автора…' />
            <Sort />
            <p> </p>
            <ViewType onClick={() => setViewType('tile')} type='tile' active={viewType === 'tile'} />
            <ViewType onClick={() => setViewType('list')} type='list' active={viewType === 'list'} />

            <p>main {category}</p>
        </section>
    );
};
