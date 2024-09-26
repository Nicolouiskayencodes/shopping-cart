import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shopping from '../components/shopping';

describe("Shopping component", () => {
  
  it("should call the prop function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup()
    render(<Shopping props={[{id:1}]} add={onClick} />);
    await user.click(screen.getAllByRole("button")[0])
    const button = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the prop function when it isn't clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup()
    render(<Shopping props={[{id: 1}]} add={onClick} />);
    await user.click(screen.getAllByRole("button")[0])
    expect(onClick).not.toHaveBeenCalled();
  });
  it("renders card", ()=>{
    const { container } = render(<Shopping props={[{id: 1}]} add="function"/>);
    expect(container).toMatchSnapshot();
  })
});
