export const lightenColorToRGB = (hex: string, percentage: number) => {
  let validHex = hex?.replace("#", "");
  if (!validHex) return "";
  if (validHex?.length === 3) {
    validHex = validHex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(validHex.substring(0, 2), 16);
  const g = parseInt(validHex.substring(2, 4), 16);
  const b = parseInt(validHex.substring(4, 6), 16);

  const lighten = (color: number) =>
    Math.round(color + (255 - color) * (percentage / 100));

  const newR = lighten(r);
  const newG = lighten(g);
  const newB = lighten(b);

  return `rgb(${newR}, ${newG}, ${newB})`;
};
