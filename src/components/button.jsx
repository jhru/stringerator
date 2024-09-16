import styles from './styles.module.scss'

export const Button = ({ type, content, action, disabled }) => {
    const handleClick = e => {
        const element = e.currentTarget
        if (element.classList.contains(styles.clicked)) return
        element.classList.add(styles.clicked)

        setTimeout(() => {
            action()
            element.classList.remove(styles.clicked)
        }, 500)
    }

    switch (type) {
        case 'text':
            return (
                <button
                    className={styles.button_text}
                    onClick={handleClick}
                    disabled={disabled}>
                    <span>{content}</span>
                    <Circle />
                </button>
            )
        case 'image':
            return (
                <button
                    className={styles.button_image}
                    onClick={handleClick}
                    disabled={disabled}>
                    <span style={content} />
                    <Circle />
                </button>
            )
        default:
            break
    }
}

const Circle = () => {
    return (
        <svg
            className={styles.circle}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50">
            <circle cx="3.2" cy="22.5" r="3.2" />
            <circle cx="8.85" cy="36.15" r="3.2" />
            <circle cx="22.5" cy="41.8" r="3.2" />
            <circle cx="36.15" cy="36.15" r="3.2" />
            <circle cx="41.8" cy="22.5" r="3.2" />
            <circle cx="36.15" cy="8.85" r="3.2" />
            <circle cx="22.5" cy="3.2" r="3.2" />
            <circle cx="8.85" cy="8.85" r="3.2" />
        </svg>
    )
}
