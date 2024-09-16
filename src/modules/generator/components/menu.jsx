import { LOCALIZATION } from '../data/_data'
import styles from '../styles.module.scss'

export const Menu = ({ curModule, setCurModule }) => {
    const LOC = LOCALIZATION.menu

    const options = {
        handleClick: e => {
            const { tab } = e.currentTarget.dataset
            if (tab === curModule) return
            setCurModule(tab)
        },
        isTabActive: tab => {
            return tab === curModule ? styles.active : undefined
        }
    }

    return (
        <div className={styles.menu}>
            <h1
                data-tab={'utility'}
                className={options.isTabActive('utility')}
                onClick={options.handleClick}>
                {LOC.utility}
            </h1>
            <h2
                data-tab={'about'}
                className={options.isTabActive('about')}
                onClick={options.handleClick}>
                {LOC.about}
            </h2>
        </div>
    )
}
