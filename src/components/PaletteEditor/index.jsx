import React, { useState, useEffect } from "react";
import COLORS from "../../js/colors";
import "./PaletteEditor.css";
import classNames from "classnames";

export function PaletteEditor() {
  const [palette, setPalette] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const newPalette = [];
    for (let i = 0; i < 32; i++) {
      newPalette.push("fefeff");
    }
    setPalette(newPalette);
  }, [setPalette]);

  function setColor(color) {
    const newPalette = [...palette];
    newPalette[selectedIndex] = color;
    setPalette(newPalette);
    setSelectedIndex((prev) => prev + 1);
  }

  function downloadPalette() {
    var binary = palette.map((item) => COLORS[item]);
    var blob = new Blob(binary, { type: "application/octet-binary" });
    var url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pal.bin";
    link.click();
  }

  return (
    <div>
      <h1>NES Palette Editor</h1>
      <h2>Selectable Colors</h2>
      <div className="indent">
        <div className="indent">
          {Object.keys(COLORS).map((colorValue) => (
            <div
              className="colorCell"
              style={{ backgroundColor: `#${colorValue}` }}
              onClick={() => setColor(colorValue)}
            />
          ))}
        </div>
      </div>
      <h2>Current Color Palettes</h2>
      <div className="indent">
        <h3>Foreground Palette</h3>
        <div className="indent">
          {palette.slice(0, 16).map((colorValue, index) => (
            <div
              className={classNames("colorCell", {
                selectedColorCell: selectedIndex === index,
              })}
              style={{ backgroundColor: `#${colorValue}` }}
              key={index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
        <h3>Background Palette</h3>
        <div className="indent">
          {palette.slice(16).map((colorValue, index) => (
            <div
              className={classNames("colorCell", {
                selectedColorCell: selectedIndex === index + 16,
              })}
              style={{ backgroundColor: `#${colorValue}` }}
              key={index + 16}
              onClick={() => setSelectedIndex(index + 16)}
            />
          ))}
        </div>
        <button onClick={downloadPalette} className="download">
          <h4>Download Current Palette</h4>
        </button>
      </div>
    </div>
  );
}
