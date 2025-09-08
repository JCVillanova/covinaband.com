import * as React from 'react';
import { useState } from 'react';
import { Form } from 'radix-ui';

function InteractableInput({ className, autofocus, inputID, inputType, inputName, placeholder, style, required, onInvalid, onInput }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        // Simple toggle
        if (focused == false) {
            setFocused(true);
        } else setFocused(false);
    };

    return (
        <div className={className} style={style}>
            <div className={`animated-border-input ${focused ? 'focused' : ''}`}
                style={{
                    borderRadius: '0.25rem',
                }}
            >
                <Form.Control asChild>
                    <input onFocus={handleFocus} onBlur={handleFocus} autoFocus={autofocus} id={inputID} type={inputType} name={inputName} placeholder={placeholder} required={required} onInvalid={onInvalid} onInput={onInput}
                        style={{
                            width: '100%',
                        }}
                    ></input>
                </Form.Control>
            </div>
        </div>
    );
}

export default InteractableInput;