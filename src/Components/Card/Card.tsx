// import React from 'react'
// import image1 from '../../assets/images/hotel-image-1.png';
import './Card.css';
import Text from '../Text/Text';
import Rating from '../Ratings/Rating';
import Button from '../Button/Button';
import ExpansionTile from '../ExpansionTile/ExpansionTile';
import { useState } from 'react';
import { TravelData, travelData } from '../../Data/TravelData';


interface CardProp {
    // imageSrc: any;
    expanded: boolean;
    data: TravelData
}

const Card = ({ expanded = false, data }: CardProp) => {
    const [tileExpanded, setTileExpanded] = useState(expanded)

    const toggleTileExpanded = () => {
        setTileExpanded(!tileExpanded)
    }
    const cardBackground = 'card-background';
    const cardTop = 'card-top';
    const cardTopRight = 'card-top-right';
    const cardExpandedComponent = 'card-expanded-component';
    const cardTopRightTextInfo = 'card-top-right-text-info'
    const cardAlignExpansionTile = 'card-align-expansion-tile'
    return (
        <div className={`${cardBackground}`}>
            <div className={`${cardTop}`}>
                <img src={data.image} alt='Hotel' />
                <div className={`${cardAlignExpansionTile}`}><ExpansionTile isExpanded={tileExpanded} onClick={() => toggleTileExpanded()} /> </div>
                <div className={`${cardTopRight}`}>
                    <Text color='secondary' type='header'>{data.title}</Text>
                    <Text type='subHeader' color='grey'>{data.location}</Text>
                    <Rating noOfStars={data.rating} />
                    <div className={`${cardTopRightTextInfo}`}>
                        <Text data-testid='text-render'>{data.adults && data.adults > 0 && <strong> {data.adults} </strong>} {data.adults && data.adults > 1 ? 'Adults' : data.adults === 1 ? 'Adult' : ''}{data.children && data.infants ? ',' : data.children && !data.infants ? ' &' : ''}

                            {data.children && data.children > 0 && <strong> {data.children} </strong>} {data.children && data.children > 1 ? 'Children' : data.children === 1 ? 'Child' : ''}{data.infants ? ' &' : ''}

                            {data.infants && data.infants > 0 && <strong> {data.infants} </strong>} {data.infants && data.infants > 1 ? 'Infants' : data.infants === 1 ? 'Infant' : ''}</Text>


                        <Text ><strong>{data.date}</strong> for <strong>{data.length}</strong> {data.length > 1 ? 'days' : data.length === 1 ? 'day' : ''}</Text>


                        <Text >departing from <strong>{data.departingFrom}</strong> </Text>
                    </div>


                    <Button onClick={() => { alert('clicked') }}>£{data.price.toLocaleString()}</Button>
                </div>
            </div>
            {/* This contains the expanded text */}
            {/* Write test to check if hidden when not expanded */}
            {tileExpanded === true && <div className={`${cardBackground} ${cardExpandedComponent}`}><Text color='secondary' type='subHeader'>Overview</Text><br /> <Text>{travelData[0].overview}</Text></div>}
        </div>
    )
}

export default Card