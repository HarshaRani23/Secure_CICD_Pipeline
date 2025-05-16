import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn();
});

test("renders login form and shows success message on login", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ message: "Login successful" }),
  });

  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "password123" },
  });

  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Use findByText for async element
  expect(await screen.findByText(/✅ Login successful/i)).toBeInTheDocument();
});
