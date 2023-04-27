import { fireEvent, render, waitFor, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import Game from "../Pages/Game"


describe("Timer component", () => {

    describe("Initialization", () => {

        test("Timer text renders 'Timer' on Game page load", () => {
            const { getByText } = render(<Game />);

            const timer = getByText("Timer")

            expect(timer).toBeVisible()
        });
    })

    describe("Timer text counts up", () => {

        test("Timer text sequentially renders '0', '1', and '2' after 'Start' button clicked", async () => {

            const { getByText, getByRole } = render(<Game />)

            const startButton = getByText(/Start/)

            fireEvent.click(startButton)

            await waitFor(() => {

                const timer = getByRole("timer")

                const timerText = within(timer).getByText(0)

                expect(timerText).toBeVisible()
            }
            )
            await waitFor(() => {

                const timer = getByRole("timer")

                const timerText = within(timer).getByText(1)

                expect(timerText).toBeVisible()
            }
            )
            await waitFor(() => {

                const timer = getByRole("timer")

                const timerText = within(timer).getByText(2)

                expect(timerText).toBeVisible()
            }
            )
        });
    })

})

