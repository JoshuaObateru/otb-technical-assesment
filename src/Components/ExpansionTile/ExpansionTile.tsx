// import React from 'react'

// import { ReactNode } from "react"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Text from "../Text/Text";
import './ExpansionTile.css'

interface ExpansionTileProps {
    onClick: () => void

    isExpanded?: boolean
}

const ExpansionTile = ({ onClick, isExpanded = false }: ExpansionTileProps) => {
    const expansionTileBackground = 'expansion-tile-background'
    const expansionTileIcon = 'expansion-tile-icon'
    return (
        <div onClick={() => onClick()} className={`${expansionTileBackground}`} ><Text color='secondary'><strong>{isExpanded === true ? 'Read less' : 'Read more'}</strong> about this hotel </Text> <strong>{isExpanded === true ? <IoIosArrowDown className={`${expansionTileIcon}`} /> : <IoIosArrowForward className={`${expansionTileIcon}`} />}</strong> </div>
    )
}

export default ExpansionTile