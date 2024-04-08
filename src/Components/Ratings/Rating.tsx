import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './Rating.css'

interface RatingProps {
    /** This enables you pass the number of rating to the component */
    noOfStars?: number
}

/** This is a dynamic component displays the number of stars according to the rating (max 5)*/
const Rating = ({ noOfStars = 0, ...props }: RatingProps) => {
    // let stars: number[] = [1, 2];
    const [stars, setStars] = useState<number[]>([])



    useEffect(() => {
        const implementNumberOfRatings = () => {
            let tempStarArray = []
            let length = noOfStars
            if (noOfStars === 0) {
                tempStarArray = [];
                setStars([])
            } else {
                // this is to ensure that if a value higher than 5 is passed from the 'database', it does not break the app as opposed to using strict props
                if (length > 5) {
                    length = 5;
                }
                for (let i = 0; i < length; i++) {
                    tempStarArray.push(i);
                }
            }
            setStars(tempStarArray)

        }
        implementNumberOfRatings()
    }, [noOfStars]);
    const ratingColor = 'rating-yellow'
    const ratingStyle = 'rating-style'
    const starStyle = 'star-style'
    return (
        <div {...props} className={`${ratingStyle}`} >
            {stars.map((star) => <FaStar key={star} className={`${ratingColor} ${starStyle}`} data-testid='ratings-render' />)}

        </div>
    )
}

export default Rating