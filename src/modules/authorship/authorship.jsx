import styles from './styles.module.scss'

export const Authorship = () => {
    const LOC = {
        author: 'Made by JHRU',
        link: 'https://github.com/jhru/stringerator'
    }

    return (
        <a
            href={LOC.link}
            target={'_blanc'}
            rel={'noopener noreferrer'}
            className={styles.authorship}>
            {LOC.author}
        </a>
    )
}
