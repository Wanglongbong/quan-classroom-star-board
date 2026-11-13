const PIXELS = {
  santa: [
    ["#7f3548", "M8 3h14v3h4v4h3v6h-5v-4H8z M5 15h22v11h-4v4H9v-4H5z"],
    ["#e65359", "M10 5h11v3h4v5H7v-3h3z M8 17h16v7H8z"],
    ["#fff6e8", "M6 13h21v5H6z M8 20h4v7h3v3h-6v-3H6v-7z M20 20h5v7h-3v3h-6v-3h4z M25 8h5v6h-5z"],
    ["#f3b28d", "M10 15h12v8H10z"],
    ["#3f4052", "M12 17h3v3h-3z M18 17h3v3h-3z"],
    ["#ffcf72", "M15 21h3v2h-3z"],
  ],
  reindeer: [
    ["#6d432c", "M4 2h3v5h4V3h3v8h4V3h3v4h4V2h3v8h-5v5h3v12h-5v3H11v-3H6V15h3v-5H4z"],
    ["#a9683c", "M9 10h14v4h3v12h-5v4H11v-4H6V14h3z"],
    ["#d99052", "M10 13h12v14H10z M6 12h5v6H6z M21 12h5v6h-5z"],
    ["#fff1d0", "M11 16h4v4h-4z M18 16h4v4h-4z"],
    ["#3b3040", "M12 17h2v3h-2z M19 17h2v3h-2z"],
    ["#e8474f", "M14 23h5v5h-5z"],
  ],
  bell: [
    ["#8b5522", "M13 3h6v4h4v4h3v11h3v5H3v-5h3V11h3V7h4z M13 27h6v3h-6z"],
    ["#f5b72f", "M13 6h6v3h4v4h2v10H7V13h2V9h4z"],
    ["#ffe47b", "M12 9h5v3h3v10h-9V12h1z"],
    ["#e76a4e", "M5 24h22v3H5z"],
  ],
  stocking: [
    ["#7f3d4d", "M7 3h18v8h-4v10h-4v4h-4v4H4V19h5V11H7z"],
    ["#e9575e", "M10 9h11v12h-4v4h-5v3H6v-7h5V9z"],
    ["#fff6e8", "M6 3h20v7H6z"],
    ["#78bf91", "M11 12h4v4h-4z M16 16h4v4h-4z"],
    ["#ffd76b", "M9 24h5v3H9z"],
  ],
  gingerbread: [
    ["#7e4c2d", "M12 3h8v3h3v7h6v8h-6v9h-5v-7h-4v7H9v-9H3v-8h6V6h3z"],
    ["#c98549", "M13 5h6v3h3v7h5v4h-6v9h-3v-7h-4v7h-3v-9H5v-4h6V8h2z"],
    ["#fff1d2", "M13 10h3v3h-3z M19 10h3v3h-3z M14 16h7v2h-7z M8 16h3v3H8z M23 16h3v3h-3z"],
    ["#e95760", "M15 20h3v3h-3z M12 24h3v3h-3z M19 24h3v3h-3z"],
  ],
  wreath: [
    ["#275f45", "M10 3h12v3h5v5h3v11h-3v5h-5v3H10v-3H5v-5H2V11h3V6h5z"],
    ["#3c9b62", "M11 5h10v3h5v5h2v8h-3v4h-5v3h-8v-3H7v-5H4v-7h3V9h4z M12 10h8v3h3v7h-3v3h-8v-3H9v-7h3z"],
    ["#83d57c", "M8 9h5v3H8z M21 8h4v4h-4z M6 20h5v3H6z M22 21h4v3h-4z"],
    ["#e95058", "M12 23h8v3h4v5h-7v-3h-2v3H8v-5h4z"],
    ["#ffd968", "M13 25h6v3h-6z"],
  ],
  snowflake: [
    ["#4b8fbd", "M14 2h4v9l6-6 3 3-6 6h9v4h-9l6 6-3 3-6-6v9h-4v-9l-6 6-3-3 6-6H2v-4h9L5 8l3-3 6 6z"],
    ["#bfefff", "M15 7h2v8h8v2h-8v8h-2v-8H7v-2h8z"],
    ["#ffffff", "M14 14h4v4h-4z"],
  ],
  sleigh: [
    ["#74442e", "M4 23h20v-5h5v8h-3v3H7v-3H3z M8 29h17v2H8z"],
    ["#d84e58", "M5 10h5v8h14v7H7v-4H5z M10 7h12v13H10z"],
    ["#f06d69", "M12 9h8v8h-8z"],
    ["#fff1cf", "M8 10h4v4H8z M13 8h8v3h-8z"],
    ["#f2c45b", "M7 19h17v3H7z"],
  ],
  cocoa: [
    ["#754530", "M5 10h20v3h4v12h-5v4H5z M24 15h6v8h-6z"],
    ["#e45359", "M7 12h16v14H7z M23 16h4v6h-4z"],
    ["#fff1dc", "M8 9h14v5H8z M10 5h3v4h-3z M16 2h3v7h-3z M22 5h3v4h-3z"],
    ["#8a4f2b", "M9 13h12v5H9z"],
    ["#ffd26b", "M10 22h4v3h-4z M17 20h4v4h-4z"],
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
  toytrain: [
    ["#713b4b", "M3 20h27v5H3z M7 25h6v5H7z M22 25h6v5h-6z M6 7h9v13H4v-9h2z M17 11h9v9h-9z"],
    ["#df4f5b", "M6 10h7v8H6z M18 14h6v4h-6z M4 20h25v3H4z"],
    ["#f3c34f", "M7 7h6v3H7z M14 18h4v2h-4z M24 19h4v2h-4z"],
    ["#a6e9ff", "M7 12h4v4H7z M19 14h4v3h-4z"],
    ["#fff2bd", "M2 29h28v2H2z"],
  ],
  snowglobe: [
    ["#345c83", "M7 3h18v3h4v15h-3v4h-4v3h-4v2h-6v-2H8v-3H5v-4H2V7h3z"],
    ["#7ed7ef", "M8 5h16v3h3v11h-3v4h-4v2h-8v-2H8v-4H5V8h3z"],
    ["#eafcff", "M9 7h13v3h3v7h-3v3h-4v2h-5v-2H9v-4H7v-6h2z"],
    ["#37865a", "M11 16h3v-4h3v4h3v3H9v-2h2z M15 19h3v3h-3z"],
    ["#e64f5a", "M13 14h3v3h-3z M19 11h2v2h-2z"],
    ["#f4cb5a", "M8 25h16v3H8z M5 28h22v3H5z"],
  ],
  gingerhouse: [
    ["#68402f", "M2 13 16 2l14 11v17h-9v-9h-9v9H2z"],
    ["#bd7545", "M5 14 16 5l11 9v13h-7v-9H12v9H5z"],
    ["#fff1d4", "M4 13 16 4l12 9h-5l-7-5-7 5z M12 18h9v3h-9z M4 27h24v3H4z"],
    ["#75bf83", "M7 15h5v5H7z M21 15h5v5h-5z"],
    ["#e7505b", "M8 16h3v3H8z M22 16h3v3h-3z M14 23h4v4h-4z M6 11h4v3H6z M22 11h4v3h-4z"],
    ["#ffd56a", "M14 12h4v4h-4z"],
  ],
  giftbag: [
    ["#713d50", "M5 9h22v19H5z M9 5h4v5H9z M19 5h4v5h-4z M3 28h26v3H3z"],
    ["#df4d5a", "M7 11h18v14H7z M10 7h3v4h-3z M19 7h3v4h-3z"],
    ["#fff0c8", "M14 11h4v14h-4z M7 16h18v3H7z"],
    ["#f3c657", "M15 12h3v3h-3z M15 20h3v3h-3z"],
    ["#7ac28e", "M5 27h22v2H5z"],
  ],
};

export default function SeasonalIcon({ type }) {
  return (
    <svg className="seasonal-pixel-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
      {PIXELS[type].map(([color, path]) => <path key={color} fill={color} d={path} />)}
    </svg>
  );
}
