// eslint-disable-next-line import/first, padding-line-between-statements
import { ReactComponent as UserIcon } from '../assets/icons/userIcon.svg';

export interface User {
    name: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}

export const user: User = {
    name: 'Иван',
    icon: UserIcon,
};

export interface BookCategory {
    category: string;
    count: number;
}

export const booksCategories: BookCategory[] = [
    {
        category: 'Бизнес-книги',
        count: 14,
    },
    {
        category: 'Детективы',
        count: 8,
    },
    {
        category: 'Детские книги',
        count: 14,
    },
    {
        category: 'Зарубежная литература',
        count: 2,
    },
    {
        category: 'История',
        count: 5,
    },
    {
        category: 'Классическая литература',
        count: 12,
    },
    {
        category: 'Книги по психологии',
        count: 11,
    },
    {
        category: 'Компьютерная литература',
        count: 54,
    },
    {
        category: 'Культура и искусство',
        count: 5,
    },
    {
        category: 'Наука и образование',
        count: 2,
    },
    {
        category: 'Публицистическая литераутра',
        count: 54,
    },
    {
        category: 'Справочники',
        count: 10,
    },
    {
        category: 'Фантастика',
        count: 12,
    },
    {
        category: 'Юмористическая литература',
        count: 8,
    },
];
