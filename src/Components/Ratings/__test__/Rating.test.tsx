import { render, screen } from '@testing-library/react';
import Rating from '../Rating';

describe("Ratings Component", () => {
    it("should render the same number of stars passed into the component", async () => {
        render(<Rating noOfStars={3} />)

        const ratingStars = screen.getAllByTestId(/ratings-render/i)
        expect(ratingStars.length).toBe(3)
    });

    it("should render only 5 stars when more than 5 stars are passed as props", async () => {
        render(<Rating noOfStars={10} />)

        const ratingStars = screen.getAllByTestId(/ratings-render/i)
        expect(ratingStars.length).toBe(5)
    });

    it("should render no star when 0 is passed to the rating component", async () => {
        render(<Rating noOfStars={0} />)

        const ratingStars = screen.queryAllByTestId(/ratings-render/i)
        expect(ratingStars.length).toBe(0)
    })

    it("should render no star when nothing is passed to the rating component", async () => {
        render(<Rating />)

        const ratingStars = screen.queryAllByTestId(/ratings-render/i)
        expect(ratingStars.length).toBe(0)
    })
})