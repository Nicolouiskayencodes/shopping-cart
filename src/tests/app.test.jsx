import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, } from '@testing-library/react';
import App from '../App';

describe("App", () => {
  it('App snapshot', () => {
    const { container } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })
});