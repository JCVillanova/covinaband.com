import * as React from 'react';
import { useState } from 'react';

function InteractableInput({ className, autofocus, inputID, inputType, inputName, placeholder, style, required }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        // Simple toggle
        if (focused == false) {
            setFocused(true);
        } else setFocused(false);
    };

    return (
        <div className={className} style={style}>
            <div>
                <div className={`animated-border-input ${focused ? 'focused' : ''}`}
                    style={{
                        borderRadius: '0.25rem',
                    }}
                >
                    <input onFocus={handleFocus} onBlur={handleFocus} autoFocus={autofocus} id={inputID} type={inputType} name={inputName} placeholder={placeholder} required={required}
                        style={{
                            width: '100%',
                        }}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default InteractableInput;