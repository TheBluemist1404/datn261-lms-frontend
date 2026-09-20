import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/render";
import { HomePage } from "./home-page";

describe("HomePage", () => {
	it("renders the project identity and planned capabilities", () => {
		renderWithProviders(<HomePage />);

		expect(
			screen.getByRole("heading", { name: "Learner-Oriented LMS" }),
		).toBeInTheDocument();
		expect(screen.getByText("Personal study workspace")).toBeInTheDocument();
		expect(
			screen.getByText("Real-time study collaboration"),
		).toBeInTheDocument();
	});
});
