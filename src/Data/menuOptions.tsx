import React from "react";
import { MdSortByAlpha } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


interface MenuOptions {
    label: string;
    icon: any;
    isSelected: boolean;
}


// const iconStyle = 'options-icon-style'
const optionIconStyle: React.CSSProperties | undefined = { fontSize: 'larger', fontWeight: 900, }

export const menuOptions: MenuOptions[] = [
    {
        label: 'alphabetically',
        icon: <MdSortByAlpha style={optionIconStyle} />,
        isSelected: false
    },
    {
        label: 'price',
        icon: <IoPricetags style={optionIconStyle} />,
        isSelected: true
    },
    {
        label: 'star rating',
        icon: <FaStar style={optionIconStyle} />,
        isSelected: false
    },
]