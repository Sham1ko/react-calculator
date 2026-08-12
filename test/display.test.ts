import { getDisplayFontSizeClass } from "../src/helpers/display";

describe("getDisplayFontSizeClass", () => {
  test("uses the largest size for short text", () => {
    expect(getDisplayFontSizeClass(5)).toBe("text-8xl");
    expect(getDisplayFontSizeClass(9)).toBe("text-8xl");
  });

  test("shrinks once past 9 characters", () => {
    expect(getDisplayFontSizeClass(10)).toBe("text-6xl");
    expect(getDisplayFontSizeClass(12)).toBe("text-6xl");
  });

  test("shrinks further once past 12 characters", () => {
    expect(getDisplayFontSizeClass(13)).toBe("text-5xl");
    expect(getDisplayFontSizeClass(14)).toBe("text-5xl");
  });

  test("shrinks further once past 14 characters", () => {
    expect(getDisplayFontSizeClass(15)).toBe("text-4xl");
    expect(getDisplayFontSizeClass(17)).toBe("text-4xl");
  });

  test("shrinks further once past 17 characters", () => {
    expect(getDisplayFontSizeClass(18)).toBe("text-3xl");
    expect(getDisplayFontSizeClass(20)).toBe("text-3xl");
  });

  test("shrinks further once past 20 characters", () => {
    expect(getDisplayFontSizeClass(21)).toBe("text-2xl");
    expect(getDisplayFontSizeClass(22)).toBe("text-2xl");
  });

  test("shrinks further once past 22 characters", () => {
    expect(getDisplayFontSizeClass(23)).toBe("text-xl");
    expect(getDisplayFontSizeClass(24)).toBe("text-xl");
  });

  test("uses the smallest size for anything past 24 characters", () => {
    expect(getDisplayFontSizeClass(25)).toBe("text-base");
    expect(getDisplayFontSizeClass(100)).toBe("text-base");
  });
});
