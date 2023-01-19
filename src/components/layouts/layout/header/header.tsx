// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';
import { Htag } from '../../../common/htag/htag';
import { Text } from '../../../common/text/text';

import { HeaderProps } from './header.props';

import styles from './header.module.css';

// Mocs
const username = 'Иван';
// eslint-disable-next-line import/first
import { ReactComponent as UserIcon } from '../../../../assets/icons/userIcon.svg';

export const Header = ({ className, ...props }: HeaderProps) => (
  <header className={cn(className, styles.header)} {...props}>
    <LogoIcon />
    <Htag tag='h3'>Библиотека</Htag>
    <div className={styles.user}>
      <Text type='subtitle' size='s'>
        Привет, {username}!
      </Text>
      <div className={styles.imageWrapper}>
        <UserIcon className={styles.userImage} />
      </div>
    </div>
  </header>
);
