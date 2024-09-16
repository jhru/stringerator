import { OPTIONS } from '../modules/generator/data/_data'
import {
    checkLength,
    checkAlphabets
} from '../modules/generator/helpers/_helpers'

const isLocalStorageAvailable = () => {
    try {
        localStorage.setItem('test', 'isworking')
        localStorage.removeItem('test')
        return true
    } catch (error) {
        // console.log('ERROR: #90GhT3')
        return false
    }
}

const useLocalStorage = () => {
    const add = (key, value) => {
        const storageStatus = isLocalStorageAvailable()
        if (storageStatus) {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }
    const get = {
        len: () => {
            const storageStatus = isLocalStorageAvailable()
            if (storageStatus) {
                let value = JSON.parse(localStorage.getItem('len'))
                return checkLength(value)
            }
        },
        alp: () => {
            const storageStatus = isLocalStorageAvailable()
            if (storageStatus) {
                let value = JSON.parse(localStorage.getItem('alp'))
                return checkAlphabets(value)
            }
        }
    }
    const clear = () => {
        const storageStatus = isLocalStorageAvailable()
        if (storageStatus) {
            localStorage.clear()
        }
    }

    return { add, get, clear }
}

export { useLocalStorage }
