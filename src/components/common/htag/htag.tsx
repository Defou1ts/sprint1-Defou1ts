// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { HtagProps } from './htag.props';

import styles from './htag.module.css';

export const Htag = ({ children, tag, className, ...props }: HtagProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(className, styles.h1)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(className, styles.h2)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(className, styles.h3)} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cn(className, styles.h4)} {...props}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={cn(className, styles.h5)} {...props}>
          {children}
        </h5>
      );
    default:
      throw new Error('Invalid tag');
  }
};
