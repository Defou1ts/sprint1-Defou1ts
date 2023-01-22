import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as CloseIcon } from '../../../assets/icons/action/close.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/action/search.svg';

import { SearchProps } from './search.prop';

import styles from './search.module.css';

export const Search = ({ isOpened = true, placeholder, className, ...props }: SearchProps) => {
    const [text, setText] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div
            className={cn(
                styles.wrapper,
                {
                    [styles.isOpened]: isOpened,
                    [styles.focus]: isFocused,
                },
                className
            )}
            {...props}
        >
            <SearchIcon className={cn(styles.search)} />
            <input
                placeholder={placeholder}
                className={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <CloseIcon onClick={() => setText('')} className={styles.close} />
        </div>
    );
};
