'use client';

import {useState} from 'react';
import HeartIcon from '@/components/HeartIcon/HeartIcon';

import styles from './PostCard.module.css';

interface CardProps {
    date: string;
    title: string;
    description: string;
}

export default function PostCard({date, title, description}: CardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <article className={styles.cardContainer}>
            <div className={`${styles.cardContent} ${isLiked ? styles.cardLiked : ''}`}>
                <div className={styles.cardMeta}>
                    <time className={styles.cardDate}>{date}</time>
                    <div className={styles.heartIcon}>
                        <HeartIcon onToggle={setIsLiked}/>
                    </div>
                </div>

                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>
                    {description}
                </p>
            </div>
        </article>
    );
}