export function getDisplayFontSizeClass(length: number): string {
  if (length <= 9) return "text-8xl";
  if (length <= 12) return "text-6xl";
  if (length <= 14) return "text-5xl";
  if (length <= 17) return "text-4xl";
  if (length <= 20) return "text-3xl";
  if (length <= 22) return "text-2xl";
  if (length <= 24) return "text-xl";
  return "text-base";
}
