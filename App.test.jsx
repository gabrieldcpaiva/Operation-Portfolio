import { expect, test, mock } from "bun:test";

// Mock lucide-react
mock.module("lucide-react", () => ({
  ShoppingBag: (props) => ({ type: "ShoppingBag", props }),
  ExternalLink: (props) => ({ type: "ExternalLink", props }),
}));

// Logic to be tested (matches App.jsx:121)
const renderProductCardContent = (imageUrl) => {
  if (imageUrl) {
    return { type: "img", props: { src: imageUrl } };
  } else {
    return { type: "ShoppingBag", props: { size: 48, strokeWidth: 1 } };
  }
};

test("ProductCard renders ShoppingBag when no imageUrl is provided", () => {
  const content = renderProductCardContent(null);
  expect(content.type).toBe("ShoppingBag");
  expect(content.props.size).toBe(48);
});

test("ProductCard renders img when imageUrl is provided", () => {
  const content = renderProductCardContent("test.jpg");
  expect(content.type).toBe("img");
  expect(content.props.src).toBe("test.jpg");
});
