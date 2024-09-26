import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "../components/header";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("renders Header", ()=>{
    const { container } = render(<BrowserRouter><Header itemsTotal={2}/></BrowserRouter>);
    expect(container).toMatchSnapshot();
  })
});