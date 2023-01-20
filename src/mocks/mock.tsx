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
