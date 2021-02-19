function Palettes() {
  return (
    <div className="colorcontainer hidden dropdowncontainer">
      <h3 className="colorcontainer__title">Colores</h3>
      <div className="colorcontainer__colors">
        <label className="colorcontainer__Label">
          <input
            className="colorcontainer__option js-input1 js-palette"
            type="radio"
            name="palette"
            checked=""
            value="1"
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
            value="2"
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
            value="3"
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
            value="4"
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

export default Palettes;
