// 👇 Setup happens before any test runs
beforeAll(() => {
	const canvas = document.createElement("canvas");
	canvas.id = "slideshow-canvas";

	// ✅ Mock the getContext method before jsdom tries to use it
	canvas.getContext = jest.fn(() => ({
		fillStyle: "black",
		fillRect: jest.fn(),
		drawImage: jest.fn(),
	}));

	document.body.appendChild(canvas);
});

describe("Canvas slideshow", () => {
	test("should find canvas element", () => {
		const canvas = document.getElementById("slideshow-canvas");
		expect(canvas).not.toBeNull();
	});

	test("should draw on canvas (basic API call)", () => {
		const canvas = document.getElementById("slideshow-canvas");
		const ctx = canvas.getContext("2d");

		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, 100, 100);

		expect(ctx.fillStyle).toBe("red");
		expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 100, 100);
	});
});
