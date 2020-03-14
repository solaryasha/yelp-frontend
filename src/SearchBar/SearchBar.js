import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static is-medium">
                        Find
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles["input-control"]}`} type="text" placeholder="burgers, burbers, spas, handymen" />
                </p>
                <p className="control">
                    <button className="button is-static is-medium">
                        Near
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles["input-control"]}`} type="text" placeholder="address, neighborhood, city, state" />
                </p>
                <button className={`button is-medium ${styles["search-button"]}`}>
                    <span className="icon is-small">
                        <i class="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}