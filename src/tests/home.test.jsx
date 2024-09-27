import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../components/home";

describe("Home component", () => {
  it("renders cart", ()=>{
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  })
});