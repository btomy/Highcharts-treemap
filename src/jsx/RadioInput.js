import React from 'react';

const RadioInput = ({
    selectedOption,
    handleRadioChange,
    inputValue,
    label
}) => {

    return(
        <div className="radio">
            <label>
                <input 
                    type="radio" 
                    value={inputValue} 
                    onChange={(e) => handleRadioChange(e)} 
                    checked={selectedOption === inputValue} />
                {label}
            </label>
        </div>
    );
}

export default RadioInput;
