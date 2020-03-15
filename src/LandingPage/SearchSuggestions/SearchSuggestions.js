import React from 'react';
import styles from './SearchSuggestions.module.css'
export function SearchSuggestions() {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-wrench"></i></span><span className={styles.suggestion}>Plumbers</span>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Restaurants</span>
            <span className="icon is-small"><i className="fas fa-home"></i></span><span className={styles.suggestion}>Home services</span>
            <span className="icon is-small"><i className="fas fa-motorcycle"></i></span><span className={styles.suggestion}>Delivery</span>
        </div>
    );
}