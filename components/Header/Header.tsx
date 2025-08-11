import Image from 'next/image';
import SearchBar from '@/components/SearchBar/SearchBar';

import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <Image
                src='/codelab.svg'
                alt='Logo CodeLab'
                width={170}
                height={51}
                className={styles.logoIcon}
            />
            <SearchBar/>
        </div>
    );
}