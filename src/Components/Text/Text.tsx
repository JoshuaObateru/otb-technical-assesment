import { ReactNode } from 'react'
import './Text.css'

export interface TextProps {
    /** This enables you pass the text to the component */
    children: ReactNode
    /** This determines the look and size of the text */
    type?: 'default' | 'subHeader' | 'header' | 'bolder';
    /** This determines the color for the text */
    color?: 'primary' | 'secondary' | 'grey'
}

/** This is a dynamic reusable text component that covers all the texts used on a page*/
const Text = ({ children, type = 'default', color = 'primary', ...props }: TextProps) => {
    const colorClasses = color === 'grey' ? 'text-grey' : color === 'secondary' ? 'text-secondary' : 'text-primary';
    const typeClasses = type === 'bolder' ? 'text-bolder' : type === 'subHeader' ? 'text-subHeader' : type === 'header' ? 'text-header' : 'text-default';

    return (
        type === 'header' ? <h2 {...props} className={`${colorClasses} ${typeClasses}`}>{children}</h2> : type === 'subHeader' ? <h3 {...props} className={`${colorClasses} ${typeClasses}`}>{children}</h3> :
            <p {...props} className={`${colorClasses} ${typeClasses}`}>{children}</p>
    )

}



export default Text;

