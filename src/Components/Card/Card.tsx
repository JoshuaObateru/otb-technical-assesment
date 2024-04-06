// import React from 'react'
import image1 from '../../assets/images/hotel-image-1.png';
import './Card.css';
import Text from '../Text/Text';
import Rating from '../Ratings/Rating';
import Button from '../Button/Button';
import ExpansionTile from '../ExpansionTile/ExpansionTile';
import { useState } from 'react';

interface CardProp {
    imageSrc: any;
    expanded: boolean
}

const Card = ({ imageSrc = image1, expanded = false }: CardProp) => {
    const [tileExpanded, setTileExpanded] = useState(expanded)

    const cardBackground = 'card-background';
    const cardTop = 'card-top';
    const cardTopRight = 'card-top-right';
    const cardExpandedComponent = 'card-expanded-component';
    const cardTopRightTextInfo = 'card-top-right-text-info'
    const cardAlignExpansionTile = 'card-align-expansion-tile'
    return (
        <div className={`${cardBackground}`}>
            <div className={`${cardTop}`}>
                <img src={imageSrc} alt='Hotel' />
                <div className={`${cardAlignExpansionTile}`}><ExpansionTile isExpanded={expanded} onClick={() => { }} /> </div>
                <div className={`${cardTopRight}`}>
                    <Text color='secondary' type='header'>Iberostar Grand Salome</Text>
                    <Text type='subHeader' color='grey'>Costa Adeje, Tenerife</Text>
                    <Rating noOfStars={4} />
                    <div className={`${cardTopRightTextInfo}`}>
                        <Text ><strong>2</strong> Adults, <strong>2</strong> children & <strong>1</strong> infant</Text>
                        <Text ><strong>3rd July 2019</strong> for <strong>7</strong> days</Text>
                        <Text >departing from <strong>East Midlands</strong> </Text>
                    </div>


                    <Button onClick={() => { alert('clicked') }}>£1,136.50</Button>
                </div>
            </div>
            {/* This contains the expanded text */}
            {/* Write test to check if hidden when not expanded */}
            {expanded === true && <div className={`${cardBackground} ${cardExpandedComponent}`}></div>}
        </div>
    )
}

export default Card