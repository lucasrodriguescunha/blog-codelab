import Image from 'next/image';

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

            <section className={styles.searchContainer}>
                <input
                    type='text'
                    placeholder='Pesquisar no blog'
                    className={styles.searchInput}
                />
            </section>
        </div>
    );
}