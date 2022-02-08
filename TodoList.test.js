import TodoList from '../TodoList';
import { unmountComponentAtNode } from 'react-dom';
import { fireEvent, render } from '@testing-library/react';
describe("rendering component", () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    
    it("checking", () => {
      const { getByTestId } = render(<TodoList/>,container);
      const element = getByTestId("button");
      fireEvent.click(element)
    });
  })