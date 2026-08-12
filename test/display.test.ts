import { getDisplayFontSizeClass } from "../src/helpers/display";

describe("getDisplayFontSizeClass", () => {
  test("uses the largest size for a single character", () => {
    expect(getDisplayFontSizeClass(1)).toBe("text-8xl");
  });

  test("shrinks for a 'previous line' length like '222,222,222 -'", () => {
    expect(getDisplayFontSizeClass(12)).toBe("text-4xl lg:text-5xl");
  });

  test("shrinks for a 15-digit number (the reported overflow case)", () => {
    // formatted "555,555,555,555,555" is 19 characters
    expect(getDisplayFontSizeClass(19)).toBe("text-2xl lg:text-3xl");
  });

  test("shrinks further for a longer number", () => {
    // formatted "33,333,333,333,333" is 19+ characters; use 26 as a longer case
    expect(getDisplayFontSizeClass(26)).toBe("text-xl lg:text-2xl");
  });

  test("never returns a size below the smallest step, however long the text", () => {
    expect(getDisplayFontSizeClass(200)).toBe("text-xs");
  });

  test("the chosen size always fits the available width it was computed for", () => {
    // Re-derive the same constants the implementation uses, so this test
    // catches any future edit that breaks the actual no-overflow guarantee.
    const MOBILE_AVAILABLE_WIDTH_PX = 278;
    const DESKTOP_AVAILABLE_WIDTH_PX = 349;
    const CHAR_WIDTH_RATIO = 0.52;
    const PX_BY_CLASS: Record<string, number> = {
      "text-8xl": 96,
      "text-7xl": 72,
      "text-6xl": 60,
      "text-5xl": 48,
      "text-4xl": 36,
      "text-3xl": 30,
      "text-2xl": 24,
      "text-xl": 20,
      "text-lg": 18,
      "text-base": 16,
      "text-sm": 14,
      "text-xs": 12,
    };

    // Lengths beyond ~44 chars can't fit even at the smallest step (text-xs) on
    // mobile - that saturation behavior is covered separately above.
    for (const length of [1, 5, 9, 12, 14, 19, 22, 26, 30, 35, 40]) {
      const result = getDisplayFontSizeClass(length);
      const [mobileClass, desktopClassRaw] = result.split(" ");
      const desktopClass = desktopClassRaw
        ? desktopClassRaw.replace("lg:", "")
        : mobileClass;

      const mobilePx = PX_BY_CLASS[mobileClass];
      const desktopPx = PX_BY_CLASS[desktopClass];

      expect(length * mobilePx * CHAR_WIDTH_RATIO).toBeLessThanOrEqual(
        MOBILE_AVAILABLE_WIDTH_PX + 0.01
      );
      expect(length * desktopPx * CHAR_WIDTH_RATIO).toBeLessThanOrEqual(
        DESKTOP_AVAILABLE_WIDTH_PX + 0.01
      );
    }
  });
});
