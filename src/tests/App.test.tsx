import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '@store/rootStore';

test('renders App component with id check', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    const appElement = screen.getByTestId('app-root');
    expect(appElement).toBeInTheDocument();
});
