import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import List from '../../components/List';

test('list should render properly', () => {
    act(() => {
        render(<List title="Title 1" subtitle="subtitle 1" items={["Item 1", "Item 2"]} />);
    })
    const titleElement = screen.getByTestId("title");
    const subtitleElement = screen.getByTestId("subtitle");
    const listElement = screen.getByTestId("list");
    
    expect(titleElement.textContent).toBe('Title 1');
    expect(subtitleElement.textContent).toBe('subtitle 1');
    expect(listElement.children.length).toBe(2);
    
});

