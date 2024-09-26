import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "../components/itemcard";
describe("Cart component", () => {
  it("renders price", () => {
    render(<ItemCard props={{image: "url", title: "title", price: 10}}/>);
    expect(screen.getByText("$10")).toBeInTheDocument();
  });
  it("renders card", ()=>{
    const { container } = render(<ItemCard props={{ image: "url", title: "title", price: 10}}/>);
    expect(container).toMatchSnapshot();
  })
});