import { fireEvent, render, waitFor, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import Game from "../Pages/Game"

test("Timer text renders 'Timer' on Game page load", () => {
    const { getByText } = render(<Game />);

    const timer = getByText("Timer")

    expect(timer).toBeVisible()
});

test("Timer text renders '0' after 'Start' button clicked", async () => {

    const { getByText, getByRole } = render(<Game />)

    const startButton = getByText(/Start/)

    fireEvent.click(startButton)

    await waitFor(() => {

        const timer = getByRole("timer")

        const timerText = within(timer).getByText(0)

        expect(timerText).toBeVisible()
    }
    )
});

test("Timer text renders '1' after 'Start' button clicked", async () => {
    const { getByText, getByRole } = render(<Game />)

    const startButton = getByText(/Start/)

    fireEvent.click(startButton)

    await waitFor(() => {

        const timer = getByRole("timer")

        const timerText = within(timer).getByText(1)

        expect(timerText).toBeVisible()
    }, { timeout: 2000 }
    )
})
