import * as React from 'react';
import { useState } from 'react';

function InteractableTextArea({ className, inputID, inputName, numRows, style, required }) {
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
                        display: 'flex',
                    }}
                >
                    <textarea onFocus={handleFocus} onBlur={handleFocus} id={inputID} name={inputName} rows={numRows} required={required}
                        style={{
                            height: '100%',
                            marginBottom: focused ? '0px' : '0px',
                            width: '100%',
                        }}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default InteractableTextArea;