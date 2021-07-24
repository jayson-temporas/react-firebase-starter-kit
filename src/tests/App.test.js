import { render, screen } from '@testing-library/react';
import App from '../App';
import store from "../store"
import {Provider} from "react-redux"

it('renders the homepage', async () => {
    render(<Provider store={store}><App /></Provider>);
    const headerElement = await screen.findByTestId("header");
    expect(headerElement).toBeInTheDocument();
});

it('renders the login page', async () => {
    render(<Provider store={store}><App /></Provider>);
    const headerElement = await screen.findByTestId("header");
    expect(headerElement).toBeInTheDocument();
});
