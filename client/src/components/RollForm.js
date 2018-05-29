import React from 'react';

const RollForm = ({onChange, onRollClick, onInitClick}) => {

    const handleChange = event => { onChange(event.target) };

    return(
        <div>
            <form>
                <label>Roll </label>
                <input type="number" name="count" onChange={handleChange} min="1" max="infinity" required />
                <label>d</label>
                <input type="number" name="sides" onChange={handleChange} min="1" max="infinity" required />
                <label>+</label>
                <input type="number" name="mod" onChange={handleChange} />
                <input type="button" onClick={onRollClick} value="Roll!" />
                <input type="button" onClick={onInitClick} value="Roll initiative!" />
            </form>
        </div>
    );
}
export default RollForm;
