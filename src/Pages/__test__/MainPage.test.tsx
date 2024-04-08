import { render, screen, fireEvent } from "@testing-library/react"
import MainPage from "../MainPage"

describe("Main Page", () => {

    it("should contain Aguamariana first when sorted alphabetically", () => {
        render(<MainPage />)

        const optionElements = screen.getAllByTestId(/options-render/i)
        fireEvent.click(optionElements[0])

        const listElements = screen.getAllByTestId(/list-elements/i)

        expect(listElements[0].textContent).toContain("Aguamarina")

    })

    it("should contain Las Piramides Resort first when sorted by stars", async () => {
        render(<MainPage />)

        const optionElements = await screen.findAllByTestId(/options-render/i)

        fireEvent.click(optionElements[2])

        const listElements = screen.getAllByTestId(/list-elements/i)

        expect(listElements[0].textContent).toContain("Las Piramides Resort")

    })

    it("should contain Iberostar Grand Salome first when sorted by price", async () => {
        render(<MainPage />)

        const optionElements = await screen.findAllByTestId(/options-render/i)

        fireEvent.click(optionElements[2])

        const listElements = screen.getAllByTestId(/list-elements/i)

        expect(listElements[0].textContent).toContain("Iberostar Grand Salome")

    })
})