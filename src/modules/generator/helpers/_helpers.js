import { OPTIONS, ALPHABETS } from '../data/_data'

const setDisabled = (type, data) => {
    const { minLength, maxLength } = OPTIONS
    switch (type) {
        case 'update':
            if (data.len < minLength) return true
            if (data.len > maxLength) return true
            if (data.alp.length < 1) return true
            return false
        case 'save':
            if (data.status === false) return true
            return false
        case 'decrement':
        case 'increment':
            if (type === 'decrement' && minLength >= data) return true
            if (type === 'increment' && maxLength <= data) return true
            return false
        default:
            return false
    }
}

const createString = (length, alphabet) => {
    if (alphabet.length < 1)
        return {
            status: false,
            string: 'no_alphabets'
        }
    const combined = alphabet.map(item => ALPHABETS[item]).join('')
    let result = ''
    let lastChar = ''
    for (let i = 0; i < length; i++) {
        let newChar = ''
        do {
            const random = Math.floor(Math.random() * combined.length)
            newChar = combined[random]
        } while (newChar === lastChar)
        result += lastChar = newChar
    }
    return { status: true, string: result }
}

const setCounterStep = ({ crement, shift, ctrl, alt }) => {
    let result = crement
    if (shift && !ctrl && !alt) result *= OPTIONS.shiftStep
    if (!shift && ctrl && !alt) result *= OPTIONS.ctrlStep
    if (!shift && !ctrl && alt) result *= OPTIONS.altStep
    return result
}

const checkLength = tocheck => {
    if (Number.isInteger(tocheck) === false) {
        // console.log('ERROR: #FYtGMX')
        return OPTIONS.defaultLength
    }

    const framed = Math.max(
        OPTIONS.minLength,
        Math.min(tocheck, OPTIONS.maxLength)
    )

    return framed
}

const checkAlphabets = tocheck => {
    if (Array.isArray(tocheck) === false) {
        // console.log('ERROR: #PKIPIN')
        return OPTIONS.defaultAlphabet
    }

    const validated = tocheck.every(
        (item, index) =>
            tocheck.indexOf(item) === index &&
            Object.keys(ALPHABETS).includes(item)
    )

    if (validated === false) {
        // console.log('ERROR: #IgKaSC')
        return OPTIONS.defaultAlphabet
    }

    return tocheck
}

const setDefault = () => {
    return {
        len: OPTIONS.defaultLength,
        alp: OPTIONS.defaultAlphabet,
        res: createString(OPTIONS.defaultLength, OPTIONS.defaultAlphabet)
    }
}

export {
    setDisabled,
    createString,
    setCounterStep,
    checkLength,
    checkAlphabets,
    setDefault
}
