import { render, screen } from "@testing-library/react"
import Card from "../Card"

import { travelData } from '../../../Data/TravelData'

describe("Card component", () => {

    it("should not render the infant text when there is no infant info in the data", () => {
        render(<Card expanded={false} data={travelData[2]} />)

        const textElement = screen.getByTestId(/text-render/i)
        expect(textElement.textContent).not.toContain("infant")

    })

    it("should render the infant (singular) text when one infant is passed in the data", () => {
        render(<Card expanded={false} data={travelData[0]} />)

        const textElement = screen.getByTestId(/text-render/i)
        expect(textElement.textContent).toContain("Infant")

    })

    it("should render the child (singular) text when one child is passed in the data", () => {
        render(<Card expanded={false} data={travelData[1]} />)

        const textElement = screen.getByTestId(/text-render/i)
        expect(textElement.textContent).toContain("Child")

    })

    it("should render the children (plural) text when more than one child is passed in the data", () => {
        render(<Card expanded={false} data={travelData[0]} />)

        const textElement = screen.getByTestId(/text-render/i)
        expect(textElement.textContent).toContain("Children")

    })

    it("should render the adults (plural) text when more than one adult is passed in the data", () => {
        render(<Card expanded={false} data={travelData[0]} />)

        const textElement = screen.getByTestId(/text-render/i)
        expect(textElement.textContent).toContain("Adults")

    })
})