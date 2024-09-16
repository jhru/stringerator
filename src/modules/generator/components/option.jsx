import { ALPHABETS } from '../data/_data'
import { setDisabled, setCounterStep, checkLength } from '../helpers/_helpers'
import styles from '../styles.module.scss'

export const Option = ({ curOption, setOption }) => {
    const options = {
        handleLength: e => {
            const { value } = e.currentTarget.dataset
            const stepValue = setCounterStep({
                crement: value === 'decrement' ? -1 : 1,
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            })
            const result = checkLength(curOption.len + stepValue)
            setOption({ len: result, alp: curOption.alp })
        },
        handleAlphabet: e => {
            const { value } = e.currentTarget.dataset
            const isActive = curOption.alp.includes(value)
            let result = []
            isActive === true
                ? (result = curOption.alp.filter(item => item !== value))
                : (result = [...curOption.alp, value])
            setOption({ len: curOption.len, alp: result })
        },
        isAlphabetActive: uid => {
            return curOption.alp.includes(uid)
                ? `${styles.alphabet} ${styles.active}`
                : styles.alphabet
        }
    }

    return (
        <div className={styles.option}>
            <button
                data-value={'decrement'}
                onClick={options.handleLength}
                className={styles.crement}
                disabled={setDisabled('decrement', curOption.len)}>
                -
            </button>
            <strong>{curOption.len}</strong>
            <button
                data-value={'increment'}
                onClick={options.handleLength}
                className={styles.crement}
                disabled={setDisabled('increment', curOption.len)}>
                +
            </button>
            {Object.keys(ALPHABETS).map(uid => {
                return (
                    <button
                        key={`cat-${uid}`}
                        data-value={uid}
                        onClick={options.handleAlphabet}
                        className={options.isAlphabetActive(uid)}>
                        {uid}
                    </button>
                )
            })}
        </div>
    )
}
