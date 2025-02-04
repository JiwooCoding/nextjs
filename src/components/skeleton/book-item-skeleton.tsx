import React from 'react'
import styles from './book-item-skeleton.module.css'

const BookItemSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.coverImage}></div>
            <div className={styles.info_container}>
                <div className={styles.title}></div>
                <div className={styles.subtitle}></div>
                <br/>
                <div className={styles.author}></div>
            </div>
        </div>
    )
}

export default BookItemSkeleton