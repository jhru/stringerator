import React from 'react'
import { LOCALIZATION } from '../data/_data'
import { setDisabled, createString } from '../helpers/_helpers'
import { Button } from '../../../components/_components'
import styles from '../styles.module.scss'

export const Result = ({ curOption, curResult, setResult }) => {
    const LOC = LOCALIZATION.result

    const options = {
        strongData: () => {
            const { status, string } = curResult
            return {
                style: status ? styles.enabled : styles.disabled,
                text: status ? string : LOC[string]
            }
        },
        resultUpdate: () => {
            const { len, alp } = curOption
            const updated = createString(len, alp)
            setResult(updated)
        },
        resultSave: e => {
            const { string } = curResult
            navigator.clipboard.writeText(string)
        }
    }

    return (
        <div className={styles.result}>
            <Button
                type={'image'}
                content={{ backgroundImage: `url('/webp/update.webp')` }}
                action={options.resultUpdate}
                disabled={setDisabled('update', curOption)}
            />
            <strong className={options.strongData().style}>
                {options.strongData().text}
            </strong>
            <Button
                type={'image'}
                content={{ backgroundImage: `url('/webp/save.webp')` }}
                action={options.resultSave}
                disabled={setDisabled('save', curResult)}
            />
        </div>
    )
}
