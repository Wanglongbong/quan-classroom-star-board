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
  blackcat: [
    ["#332842", "M4 5h5v6h3V8h8v3h3V5h5v17h-3v5H7v-5H4z"],
    ["#51405f", "M7 12h18v11h-3v3H10v-3H7z"],
    ["#ffb8c7", "M6 7h2v4H6z M24 7h2v4h-2z"],
    ["#ffd35f", "M10 16h5v4h-5z M18 16h5v4h-5z"],
    ["#2b2845", "M12 16h2v4h-2z M20 16h2v4h-2z"],
    ["#ff90ab", "M16 21h2v2h-2z"],
  ],
  cauldron: [
    ["#5b4074", "M5 12h22v3H5z M7 15h18v10h-3v3H10v-3H7z"],
    ["#3c304e", "M9 16h14v8h-3v2h-8v-2H9z M9 26h4v3H9z M19 26h4v3h-4z"],
    ["#8bdc68", "M8 11h16v4H8z M10 8h5v3h-5z M18 6h4v5h-4z M14 4h3v3h-3z"],
    ["#c5f988", "M10 12h11v2H10z M19 7h2v3h-2z"],
    ["#9a72b5", "M8 17h3v5H8z"],
  ],
  skull: [
    ["#655177", "M9 4h14v3H9z M6 7h20v16h-4v5H10v-5H6z"],
    ["#fff5df", "M10 6h12v3H10z M8 9h16v13h-4v4H12v-4H8z M20 22h2v4h-2z"],
    ["#4c405d", "M10 14h5v5h-5z M18 14h5v5h-5z M16 19h2v3h-2z M13 23h2v3h-2z M17 23h2v3h-2z"],
    ["#ffb6ba", "M8 19h2v2H8z M23 19h2v2h-2z"],
  ],
  spider: [
    ["#453653", "M3 10h4v5h4v-3h3V9h4v3h3v3h4v-5h4v3h-2v5h-5v8h-3v-5H13v5h-3v-8H5v-5H3z"],
    ["#796286", "M10 14h12v8H10z"],
    ["#ffde76", "M12 16h3v3h-3z M18 16h3v3h-3z"],
    ["#30283f", "M13 17h1v2h-1z M19 17h1v2h-1z"],
  ],
  tree: [
    ["#486247", "M14 3h4v3h3v4h3v4h3v5h3v5H2v-5h3v-5h3v-4h3V6h3z"],
    ["#2e9d69", "M14 6h4v3h3v4h3v4h3v4H5v-4h3v-4h3V9h3z"],
    ["#75d78c", "M14 7h3v3h-3z M10 13h4v3h-4z M18 16h5v3h-5z"],
    ["#ffd769", "M15 1h3v4h-3z M8 19h3v3H8z M21 12h3v3h-3z"],
    ["#e65d67", "M15 13h3v3h-3z M19 20h3v3h-3z"],
    ["#9c603e", "M13 23h7v6h-7z"],
  ],
  snowman: [
    ["#78a8bc", "M11 4h10v3H11z M8 7h16v11h2v9H6v-9h2z"],
    ["#fffdf2", "M11 6h10v3H11z M9 9h14v10h2v6H7v-6h2z"],
    ["#3c6076", "M8 4h16v3H8z M11 1h10v4H11z M11 13h3v3h-3z M19 13h3v3h-3z M15 21h3v2h-3z"],
    ["#ed7d4b", "M15 16h6v2h-6z"],
    ["#d95262", "M8 18h16v3H8z M10 21h4v4h-4z"],
    ["#b7e7eb", "M9 23h3v2H9z M22 22h2v2h-2z"],
  ],
  gift: [
    ["#86526b", "M4 12h24v5H4z M6 17h20v12H6z"],
    ["#ee5c6a", "M7 18h18v9H7z M5 13h22v3H5z"],
    ["#fff2b7", "M14 13h4v14h-4z M7 20h18v3H7z"],
    ["#7ac69b", "M8 6h7v3h3V6h7v6H8z"],
    ["#e9f6de", "M10 7h4v3h-4z M19 7h4v3h-4z"],
  ],
  santahat: [
    ["#873f53", "M18 3h4v4h3v5h3v9H6v-5h4v-5h4V7h4z"],
    ["#e9565a", "M17 6h5v4h3v8H8v-2h4v-5h3V8h2z"],
    ["#ffac9a", "M16 8h2v6h-2z M20 10h2v4h-2z"],
    ["#fff8e9", "M5 19h23v6H5z M24 9h5v6h-5z"],
    ["#cce5df", "M7 23h18v2H7z"],
  ],
  candycane: [
    ["#a9525f", "M13 5h11v3h3v9h-4V9H14v4h-4v16H5V12h3V8h5z"],
    ["#fff7e5", "M14 7h10v3H14z M9 10h5v18H7V13h2z M23 10h3v7h-3z"],
    ["#e95765", "M9 14h5v3H9z M9 21h5v3H9z M17 7h4v3h-4z M23 12h3v3h-3z"],
    ["#7ab899", "M10 10h3v3h-3z"],
  ],
};

export default function SeasonalIcon({ type }) {
  return (
    <svg className="seasonal-pixel-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
      {PIXELS[type].map(([color, path]) => <path key={color} fill={color} d={path} />)}
    </svg>
  );
}
