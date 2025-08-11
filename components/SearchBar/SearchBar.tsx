import styles from '@/components/SearchBar/SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input
                type='text'
                placeholder='Pesquisar no blog'
                className={styles.searchInput}
            />
        </div>
    );
}