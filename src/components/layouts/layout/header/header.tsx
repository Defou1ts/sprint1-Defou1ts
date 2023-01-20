// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';
import { user } from '../../../../mock';
import { Burger } from '../../../common/burger/burger';
import { Htag } from '../../../common/htag/htag';
import { Text } from '../../../common/text/text';

import { HeaderProps } from './header.props';

import styles from './header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
  const { name, icon: UserIcon } = user;

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Burger isOpened={false} onClick={() => {}} />
      <LogoIcon className={styles.logo} />
      <Htag tag='h3'>Библиотека</Htag>
      <div className={styles.user}>
        <Text type='subtitle' size='s'>
          Привет, {name}!
        </Text>
        <div className={styles.imageWrapper}>
          <UserIcon className={styles.userImage} />
        </div>
      </div>
    </header>
  );
};
