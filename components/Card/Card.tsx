import styles from './Card.module.css';

interface CardProps {
    date: string;
    title: string;
    description: string;
}

export default function Card({date, title, description}: CardProps) {
    return (
        <article className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <time className={styles.cardDate}>{date}</time>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>
                    {description}
                </p>
            </div>
        </article>
    );
}