const LOCALIZATION = {
    about: {
        description:
            'The utility is designed to create a password or identifier. A given group of characters is iterated a specified number of times, resulting in a string that can be copied with one click.',
        table: {
            title: 'Length',
            limits: 'Limit',
            shift: 'SHIFT',
            ctrl: 'CTRL',
            alt: 'ALT'
        },
        button: {
            local_storage: 'clear local storage',
            default_state: 'set initial state'
        }
    },
    menu: {
        utility: 'String Generator',
        about: 'About'
    },
    description: {
        title: 'String Generator',
        text: "A couple of clicks to create a good password. Adjust the length and alphabet, and then just update and copy the password. That's it!"
    },
    result: {
        update: 'Update',
        copy: 'Copy',
        no_alphabets:
            'To generate a string, you need alphabets based on which the generation will be based. Choose at least one.'
    }
}

const OPTIONS = {
    minLength: 6,
    maxLength: 180,
    shiftStep: 10,
    ctrlStep: 20,
    altStep: 50,
    defaultLength: 18,
    defaultAlphabet: ['uppercase', 'lowercase', 'number']
}

const ALPHABETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+-=[]{}.,<>?'
}

export { LOCALIZATION, OPTIONS, ALPHABETS }
