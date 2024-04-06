// import React from 'react'

// import { ReactNode } from "react"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Text from "../Text/Text";

interface ExpansionTileProps {
    onClick: () => void

    isExpanded?: boolean
}

const ExpansionTile = ({ onClick, isExpanded = false }: ExpansionTileProps) => {
    return (
        <button onClick={() => onClick()} style={{ backgroundColor: "white", padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0, }}><Text color='secondary'><strong>{isExpanded === true ? 'Read less' : 'Read more'}</strong> about this hotel </Text>{isExpanded === true ? <IoIosArrowDown style={{ color: 'blue', fontWeight: 'bold' }} /> : <IoIosArrowForward style={{ color: 'blue', fontWeight: 'bold' }} />} </button>
    )
}

export default ExpansionTile