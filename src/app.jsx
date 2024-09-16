import { useState, useEffect } from 'react'
import { Generator, Authorship } from './modules/modules'
import { Loader } from './components/_components'
import './styles/global.scss'

export const App = () => {
    const [appStatus, setAppStatus] = useState('loading')

    useEffect(() => {
        setTimeout(() => setAppStatus('generator'), 1000)
    }, [])

    return (
        <div className="app">
            {appStatus === 'loading' && <Loader />}
            {appStatus === 'generator' && (
                <>
                    <Generator />
                    <Authorship />
                </>
            )}
        </div>
    )
}
