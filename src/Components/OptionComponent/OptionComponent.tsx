import { ReactNode } from "react"
import Text from "../Text/Text"
import './OptionComponent.css'
interface OptionComponentProps {
    isSelected?: boolean
    showLine?: boolean
    label: string
    children: ReactNode
    onClick: () => void
}

const OptionComponent = ({ isSelected = false, label, onClick, showLine = false, children }: OptionComponentProps) => {
    // const [menuItemSelected, setMenuItemSelected] = useState(isSelected)
    // const toggleTileExpanded = () => {
    //     setMenuItemSelected(!menuItemSelected)
    // }

    const optionComponentStyle = 'option-component-style'
    const showBottomBorder = showLine === true ? 'show-bottom-border' : 'hide-bottom-border'
    const optionComponentBackground = isSelected === false ? 'option-component-unselected' : 'option-component-selected'
    return (
        <div data-testid={`options-render`} onClick={() => { onClick() }} className={`${optionComponentStyle} ${optionComponentBackground} ${showBottomBorder}`}>
            <Text color={isSelected === true ? 'white' : 'secondary'}>sort {label !== 'alphabetically' ? 'by' : ''} <strong>{label}</strong></Text>
            <strong>{children}</strong>
        </div>
    )
}

export default OptionComponent