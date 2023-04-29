import colorNames from "colornames"
const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form className="addColorName" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="input">Input</label>
        <input
            autoFocus
            id="input"
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            } }
        />
        <button
            type="button"
            onClick={() => {setIsDarkText(!isDarkText)} }
        >
            Toggle Text Color
        </button>
    </form>
   
  )
}

export default Input