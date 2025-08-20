import * as React from 'react';
import { useState } from 'react';

function InteractableInput({ className, inputType, inputName, style }) {
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
                    <input onFocus={handleFocus} onBlur={handleFocus} type={inputType} name={inputName}
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