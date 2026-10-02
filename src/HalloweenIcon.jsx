const PIXELS = {
  pumpkin: [
    ["#5b9d42", "M14 2h4v5h-4z M18 4h4v3h-4z"],
    ["#ad481d", "M8 8h16v3H8z M5 11h22v14H5z M8 25h16v3H8z"],
    ["#ff9c2f", "M9 10h14v17H9z M6 14h20v10H6z"],
    ["#ffca52", "M10 12h4v3h-4z M9 18h3v5H9z M20 12h3v3h-3z"],
    ["#4c2d35", "M10 16h4v4h-4z M18 16h4v4h-4z M12 22h8v2h-8z M14 24h4v2h-4z"],
  ],
  ghost: [
    ["#7b62bd", "M10 5h12v3H10z M7 8h18v18h-3v-3h-3v3h-4v-3h-3v3H7z"],
    ["#fffdf3", "M10 8h12v3H10z M8 11h16v12h-3v-3h-4v3h-4v-3h-3v3H8z"],
    ["#d2ecff", "M9 16h3v5H9z M13 21h3v2h-3z"],
    ["#33315f", "M12 14h3v5h-3z M19 14h3v5h-3z M16 21h3v2h-3z"],
    ["#ff90b6", "M9 20h3v2H9z M21 20h2v2h-2z"],
  ],
  bat: [
    ["#332b55", "M2 10h4v3h3v-3h3v3h3v-3h3v3h3v-3h3v3h3v-3h3v12h-4v-3h-4v4h-4v4h-4v-4h-4v-4H6v3H2z"],
    ["#7060a5", "M5 14h5v3H5z M22 14h5v3h-5z M13 16h6v7h-6z"],
    ["#ffdc69", "M12 15h3v3h-3z M18 15h3v3h-3z"],
  ],
  candycorn: [
    ["#8d5262", "M14 3h4v4h3v5h3v5h3v6h2v5H3v-5h2v-6h3v-5h3V7h3z"],
    ["#fff6dc", "M14 5h4v4h2v4H12V9h2z"],
    ["#ffbd4d", "M11 13h10v4h3v4H8v-4h3z"],
    ["#f37831", "M8 21h16v3h2v2H6v-2h2z"],
    ["#fff9dd", "M5 26h22v2H5z"],
  ],
  witchhat: [
    ["#3c315b", "M15 3h4v6h3v7h3v6h5v4H2v-4h6v-5h3v-6h2V7h2z"],
    ["#7955a8", "M16 6h2v5h3v6h2v5H9v-4h3v-6h2V8h2z"],
    ["#c8a4eb", "M15 10h2v5h-2z M12 18h3v3h-3z"],
    ["#f4ae3f", "M9 21h16v3H9z M16 20h5v5h-5z"],
    ["#fff2a2", "M17 21h3v3h-3z"],
    ["#493360", "M4 24h24v2H4z"],
  ],
};

export default function HalloweenIcon({ type }) {
  return (
    <svg className="halloween-pixel-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
      {PIXELS[type].map(([color, path]) => <path key={color} fill={color} d={path} />)}
    </svg>
  );
}
