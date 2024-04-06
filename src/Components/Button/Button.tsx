import { ReactNode } from 'react'
import Text from '../Text/Text'
import './Button.css'

interface ButtonProps {
    /** Lets you pass the price to the button */
    children: ReactNode;
    onClick: () => void
}

/** Button component (Can be more flexible when there are more buttons available) */
const Button = ({ children, onClick, ...props }: ButtonProps) => {
    const buttonBackground = 'button-bg';
    const buttonStyle = 'button-style';
    const buttonComponentsStyle = 'button-components-style'

    return (
        <button {...props} className={`${buttonBackground} ${buttonStyle}`} onClick={() => onClick()}>
            <div className={`${buttonComponentsStyle}`}>
                <Text color='secondary' type='subHeader' >Book Now</Text>
                <Text type='bolder' color='secondary'>{children}</Text>
            </div>

        </button>
    )
}

export default Button