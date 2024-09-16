import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/localstorage'
import { createString } from './helpers/_helpers'
import { Menu, Option, Result, About } from './components/_components'
import styles from './styles.module.scss'

export const Generator = () => {
    const LOCALSTORAGE = useLocalStorage()
    const [moduleStatus, setModuleStatus] = useState('utility')
    const [option, setOption] = useState({
        len: LOCALSTORAGE.get.len(),
        alp: LOCALSTORAGE.get.alp()
    })
    const [result, setResult] = useState({ status: false, string: '' })

    useEffect(() => {
        const updated = createString(option.len, option.alp)
        setResult(updated)
    }, [])

    useEffect(() => {
        LOCALSTORAGE.add('len', option.len)
        LOCALSTORAGE.add('alp', option.alp)
    }, [option])

    return (
        <div className={styles.generator}>
            <Menu curModule={moduleStatus} setCurModule={setModuleStatus} />
            <div className={styles.content}>
                {moduleStatus === 'utility' && (
                    <>
                        <Result
                            curOption={option}
                            curResult={result}
                            setResult={setResult}
                        />
                        <Option curOption={option} setOption={setOption} />
                    </>
                )}
                {moduleStatus === 'about' && (
                    <About setOption={setOption} setResult={setResult} />
                )}
            </div>
        </div>
    )
}
