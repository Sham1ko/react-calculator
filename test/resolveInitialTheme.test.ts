import { resolveInitialTheme } from "../src/contexts/ThemeContext";

describe("resolveInitialTheme", () => {
  test("returns the stored theme when it is 'light'", () => {
    expect(resolveInitialTheme("light", true)).toBe("light");
  });

  test("returns the stored theme when it is 'dark'", () => {
    expect(resolveInitialTheme("dark", false)).toBe("dark");
  });

  test("falls back to the system preference when nothing is stored and the system prefers dark", () => {
    expect(resolveInitialTheme(null, true)).toBe("dark");
  });

  test("falls back to the system preference when nothing is stored and the system prefers light", () => {
    expect(resolveInitialTheme(null, false)).toBe("light");
  });

  test("ignores an invalid stored value and falls back to the system preference", () => {
    expect(resolveInitialTheme("purple", true)).toBe("dark");
  });
});
