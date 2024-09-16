import { LOCALIZATION, OPTIONS } from '../data/_data'
import { useLocalStorage } from '../../../hooks/localstorage'
import { setDefault } from '../helpers/_helpers'
import { Button } from '../../../components/_components'
import styles from '../styles.module.scss'

export const About = ({ setOption, setResult }) => {
    const LOC = LOCALIZATION.about
    const LOCALSTOTAGE = useLocalStorage()

    const options = {
        clearLocalStorage: () => {
            LOCALSTOTAGE.clear()
        },
        setDefaultData: () => {
            const { len, alp, res } = setDefault()
            setOption({ len, alp })
            setResult(res)
        }
    }

    return (
        <div className={styles.about}>
            <p>{LOC.description}</p>
            <Button
                type={'text'}
                content={LOC.button.local_storage}
                action={options.clearLocalStorage}
                disabled={false}
            />
            <Button
                type={'text'}
                content={LOC.button.default_state}
                action={options.setDefaultData}
                disabled={false}
            />
            <div className={styles.block}>
                <h3>{LOC.table.title}</h3>
                <div>
                    <TextTitle title={LOC.table.limits} />
                    <p>{`${OPTIONS.minLength} - ${OPTIONS.maxLength}`}</p>
                </div>
                <div>
                    <BindTitle title={LOC.table.shift} />
                    <p>{OPTIONS.shiftStep}</p>
                </div>
                <div>
                    <BindTitle title={LOC.table.ctrl} />
                    <p>{OPTIONS.ctrlStep}</p>
                </div>
                <div>
                    <BindTitle title={LOC.table.alt} />
                    <p>{OPTIONS.altStep}</p>
                </div>
            </div>
        </div>
    )
}

const BindTitle = ({ title }) => {
    return (
        <strong>
            <span className={styles.text}>{title}</span>
            <span className={styles.text}>+</span>
            <span className={styles.click} />
        </strong>
    )
}

const TextTitle = ({ title }) => {
    return (
        <strong>
            <span className={styles.text}>{title}</span>
        </strong>
    )
}
