import imgNotFound from "../../../src/images/not_found.png"
import styles from './not-found-page.module.css'

export function NotFoundPage(){
    return(
        <div className={styles.notFoundPage}>
            <img src={imgNotFound} alt="menina com olhos grandes e orelhas de coelho" />
            <div className={styles.text}>
                <h1>404</h1>
                <p>Página não <br/> encontrada!</p>
            </div>
        </div>
    )
}

