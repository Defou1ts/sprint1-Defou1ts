import { useParams } from 'react-router-dom';

export const MainPage = () => {
    const { category } = useParams();

    return <section className='main-page'>{category}</section>;
};
