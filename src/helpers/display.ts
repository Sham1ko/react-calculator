// Available text width inside the display card = card width - mx-10 (2*40px) - p-10 (2*40px).
// Mobile: card is 100vw. Measured at a 375px-wide viewport -> ~215px available.
// Desktop: card is capped at lg:max-w-md (448px), so this is constant regardless of window width -> ~288px available.
const MOBILE_AVAILABLE_WIDTH_PX = 215;
const DESKTOP_AVAILABLE_WIDTH_PX = 288;

// Empirically measured average rendered width per character, in units of the font-size (px).
// Includes a small safety margin over the raw measured ratio (~0.49) since digit widths vary slightly.
const CHAR_WIDTH_RATIO = 0.52;

// Tailwind's JIT scanner only picks up class names that appear as literal strings in the
// source - it doesn't execute this file. Both the bare class and its `lg:`-prefixed sibling
// must therefore be written out in full below rather than built with string concatenation.
const FONT_SIZES: { className: string; lgClassName: string; px: number }[] = [
  { className: "text-8xl", lgClassName: "lg:text-8xl", px: 96 },
  { className: "text-7xl", lgClassName: "lg:text-7xl", px: 72 },
  { className: "text-6xl", lgClassName: "lg:text-6xl", px: 60 },
  { className: "text-5xl", lgClassName: "lg:text-5xl", px: 48 },
  { className: "text-4xl", lgClassName: "lg:text-4xl", px: 36 },
  { className: "text-3xl", lgClassName: "lg:text-3xl", px: 30 },
  { className: "text-2xl", lgClassName: "lg:text-2xl", px: 24 },
  { className: "text-xl", lgClassName: "lg:text-xl", px: 20 },
  { className: "text-lg", lgClassName: "lg:text-lg", px: 18 },
  { className: "text-base", lgClassName: "lg:text-base", px: 16 },
  { className: "text-sm", lgClassName: "lg:text-sm", px: 14 },
  { className: "text-xs", lgClassName: "lg:text-xs", px: 12 },
];

function pickFontSize(length: number, availableWidthPx: number) {
  if (length === 0) return FONT_SIZES[0];
  const fitting = FONT_SIZES.find(
    ({ px }) => length * px * CHAR_WIDTH_RATIO <= availableWidthPx
  );
  return fitting ?? FONT_SIZES[FONT_SIZES.length - 1];
}

export function getDisplayFontSizeClass(length: number): string {
  const mobile = pickFontSize(length, MOBILE_AVAILABLE_WIDTH_PX);
  const desktop = pickFontSize(length, DESKTOP_AVAILABLE_WIDTH_PX);
  return mobile.className === desktop.className
    ? mobile.className
    : `${mobile.className} ${desktop.lgClassName}`;
}
