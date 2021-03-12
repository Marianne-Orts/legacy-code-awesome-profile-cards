import React, { useState } from "react";
function Palettes(props) {
  // const [colorPalettes, setColorPalettes] = useState("1");
  const handlePalettes = (ev) => {
    props.handlePalettesWithLifting(ev.target.value); //POSIBLE (prop.value)
  };

  return (
    <div className={"colorcontainer dropdowncontainer " + props.hidden}>
      <h3 className="colorcontainer__title">Colores</h3>
      <div className="colorcontainer__colors">
        <label className="colorcontainer__Label">
          <input
            className="colorcontainer__option js-input1 js-palette"
            type="radio"
            name="palette"
            checked
            value="1"
            onChange={handlePalettes}
          />
          <ul className="colorcontainer__palette palette-1">
            <li className="colorcontainer__square colorcontainer__square--color1-1"></li>
            <li className="colorcontainer__square colorcontainer__square--color1-2"></li>
            <li className="colorcontainer__square colorcontainer__square--color1-3"></li>
          </ul>
        </label>

        <label className="colorcontainer__Label">
          <input
            className="colorcontainer__option js-palette"
            type="radio"
            name="palette"
            checked={props.data.palette === "2"}
            value="2"
            onChange={handlePalettes}
          />
          <ul className="colorcontainer__palette palette-2">
            <li className="colorcontainer__square colorcontainer__square--color2-1"></li>
            <li className="colorcontainer__square colorcontainer__square--color2-2"></li>
            <li className="colorcontainer__square colorcontainer__square--color2-3"></li>
          </ul>
        </label>

        <label className="colorcontainer__Label">
          <input
            className="colorcontainer__option js-palette"
            type="radio"
            name="palette"
            checked={props.data.palette === "3"}
            value="3"
            onChange={handlePalettes}
          />
          <ul className="colorcontainer__palette palette-3">
            <li className="colorcontainer__square colorcontainer__square--color3-1"></li>
            <li className="colorcontainer__square colorcontainer__square--color3-2"></li>
            <li className="colorcontainer__square colorcontainer__square--color3-3"></li>
          </ul>
        </label>
        <label className="colorcontainer__Label">
          <input
            className="colorcontainer__option js-palette"
            type="radio"
            name="palette"
            checked={props.data.palette === "4"}
            value="4"
            onChange={handlePalettes}
          />
          <ul className="colorcontainer__palette palette-4">
            <li className="colorcontainer__square colorcontainer__square--color4-1"></li>
            <li className="colorcontainer__square colorcontainer__square--color4-2"></li>
            <li className="colorcontainer__square colorcontainer__square--color4-3"></li>
          </ul>
        </label>
      </div>
    </div>
  );
}

/* Palettes.defaultProps = {
  props : "Palette 1",
};  */
export default Palettes;
