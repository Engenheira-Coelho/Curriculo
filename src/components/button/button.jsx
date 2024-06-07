import React from "react";
import styles from './button.module.css'

function Button({icon, href, description}) {

    return (
        <div className={styles.buttonContainer}>
            <div>
                <span>{icon}</span>
            </div>
            <div className={styles.linkWrapper}>
                <a href={href} target='_blank'>{description}</a>
            </div>
        </div>
    )
}

export default Button