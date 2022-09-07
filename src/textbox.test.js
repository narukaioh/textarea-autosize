import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextBox } from "./textbox";

describe("TextBox", () => {
  const largeContent = "cat\ndog\nbird\ndolphin\nlion";
  const smallContent = "cat\ndog\nbird";
  const min = 3;
  const max = 5;

  test("should render a component", () => {
    const { container } = render(<TextBox />);
    expect(container).toBeInTheDocument();
  });

  describe("when we have a small content...", () => {
    const props = { min, max, content: smallContent, opened: false };

    // test("should render component collapsed", () => {
    //   render(<TextBox {...props} />);

    //   expect(screen.getByText(/lion/)).toBeInTheDocument();
    // });
    test("should not show a button", () => {});
    test("should show a button if more text was inputed", () => {});
  });

  describe("when we have a large content...", () => {
    const props = { min, max, content: largeContent };

    test('should show a "See more" button', () => {
      render(<TextBox {...props} />);
      expect(screen.getByText("See more")).toBeInTheDocument();
    });
    test("");
  });
});
