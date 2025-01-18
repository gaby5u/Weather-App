import { useState } from "react";
import { fetchWeather } from "../redux/WeatherSlice";
import { useDispatch } from "react-redux";

import styles from "./Search.module.css";

const Search = () => {
  const [typedText, setTypedText] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTypedText(e.target.value);
  };

  const handleSubmiting = () => {
    if (typedText.trim()) {
      dispatch(fetchWeather(typedText));
      setTypedText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmiting();
    }
  };
  return (
    <div className={styles.inputButton}>
      <div className={styles.inputWrapper}>
        <svg
          className={styles.locationIcon}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="13pt"
          height="13pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M2360 5109 c-202 -23 -396 -80 -585 -173 -376 -185 -656 -466 -835
-839 -326 -676 -210 -1403 383 -2397 169 -283 326 -517 722 -1075 132 -187
279 -396 327 -465 90 -131 124 -160 188 -160 64 0 98 29 188 160 48 69 195
278 327 465 388 546 559 801 724 1079 533 897 674 1550 470 2181 -38 117 -141
326 -218 440 -368 550 -1033 858 -1691 784z m495 -319 c681 -143 1170 -714
1202 -1405 16 -333 -84 -701 -317 -1165 -183 -365 -385 -682 -920 -1438 -140
-199 -257 -361 -260 -361 -3 0 -31 37 -62 82 -31 45 -154 219 -273 387 -236
332 -471 679 -582 860 -415 676 -601 1199 -580 1635 26 547 334 1023 827 1274
150 77 311 126 490 151 106 15 361 4 475 -20z"
            />
            <path
              d="M2380 4201 c-339 -74 -601 -323 -691 -656 -18 -65 -22 -107 -22 -225
0 -118 4 -160 22 -225 88 -324 340 -570 668 -652 103 -26 323 -23 428 6 317
85 560 329 646 646 18 65 22 107 22 225 0 118 -4 160 -22 225 -86 318 -332
564 -646 646 -116 30 -294 35 -405 10z m324 -301 c113 -29 190 -73 276 -160
87 -86 131 -163 160 -276 36 -141 17 -295 -52 -427 -44 -82 -165 -203 -245
-245 -133 -70 -286 -88 -427 -52 -111 28 -189 73 -276 160 -87 86 -131 162
-160 276 -36 141 -18 294 52 427 42 80 163 201 245 245 132 70 286 88 427 52z"
            />
          </g>
        </svg>
        <input
          type="text"
          value={typedText}
          placeholder="Type a location..."
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button className={styles.searchIcon} onClick={handleSubmiting}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="10pt"
            height="13pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                d="M1940 5109 c-298 -33 -624 -145 -870 -299 -250 -156 -472 -371 -634
-614 -214 -320 -328 -675 -343 -1066 -40 -1063 729 -1979 1785 -2124 144 -20
406 -21 555 -1 287 38 589 148 824 301 l82 53 497 -517 c858 -892 796 -836
924 -837 65 0 82 4 129 30 63 35 105 82 126 144 28 82 17 168 -30 238 -11 17
-286 307 -610 644 -324 337 -599 624 -612 639 l-22 26 69 92 c216 287 354 633
400 1002 15 122 12 361 -5 497 -118 909 -828 1637 -1735 1779 -118 18 -416 26
-530 13z m490 -554 c613 -118 1087 -579 1221 -1188 32 -145 37 -408 11 -562
-112 -653 -619 -1156 -1270 -1261 -109 -17 -348 -19 -453 -4 -555 84 -1011
452 -1214 980 -110 284 -125 651 -39 948 121 417 403 756 792 951 158 80 308
124 527 155 65 9 344 -3 425 -19z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
