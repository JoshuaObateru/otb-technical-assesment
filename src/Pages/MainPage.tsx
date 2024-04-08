import React, { useEffect, useState } from 'react'
import { menuOptions } from '../Data/menuOptions'
import { TravelData, travelData } from '../Data/TravelData'
import OptionComponent from '../Components/OptionComponent/OptionComponent'
import './MainPage.css'
import Card from '../Components/Card/Card'

//sort options (function) with sort type and if else statement will be on this page because we are calling the array from here
const MainPage = () => {
    const [current, setCurrent] = useState('price')
    const [sortedTravelData, setSortedTravelData] = useState(travelData)

    useEffect(() => {
        sortItems(current)
    }, [current])

    const sortItems = (sortParameter: string) => {
        setCurrent(sortParameter)
        if (sortParameter === 'alphabetically') {
            travelData.sort((a: TravelData, b: TravelData) =>
                a.title.localeCompare(b.title)
            )
            setSortedTravelData(travelData)
        }
        if (sortParameter === 'price') {
            travelData.sort((a: TravelData, b: TravelData) =>
                (a.price - b.price)
            )
            setSortedTravelData(travelData)
        }
        if (sortParameter === 'star rating') {
            travelData.sort((a: TravelData, b: TravelData) =>
                (a.rating - b.rating)
            )
            setSortedTravelData(travelData)
        }
    }

    const pageStyle = 'page-style';
    const menuParentStyle = 'menu-parent-style';
    const cardParentStyle = 'card-parent-style';
    const cardSpacing = 'card-spacing'
    return (
        <div className={`${pageStyle}`}>
            <div className={`${menuParentStyle}`} >
                {menuOptions.map((menuOption, index) => <OptionComponent key={menuOption.label + index} onClick={() => sortItems(menuOption.label)} isSelected={current === menuOption.label ? true : false} label={menuOption.label} showLine={index !== (menuOptions.length - 1)}>{menuOption.icon}</OptionComponent>)}
            </div>
            <div className={`${cardParentStyle}`} data-testid={`list-elements`}>
                {sortedTravelData.map((tvd, index) => <div key={tvd.date + index} className={`${cardSpacing}`}><Card expanded={false} data={tvd} /></div>)}
            </div>
        </div>

    )
}

export default MainPage