import * as React from 'react';
import { useState } from 'react';
import { Form } from 'radix-ui';

function InteractableTextArea({ className, autofocus, inputID, inputName, placeholder, numRows, spellcheck, style, required }) {
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
                    <Form.Control asChild>
                        <textarea onFocus={handleFocus} onBlur={handleFocus} autoFocus={autofocus} id={inputID} name={inputName} placeholder={placeholder} rows={numRows} required={required}
                        spellCheck={spellcheck}
                            style={{
                                height: '100%',
                                marginBottom: focused ? '0px' : '0px',
                                width: '100%',
                            }}
                        ></textarea>
                    </Form.Control>
                </div>
            </div>
        </div>
    );
}

export default InteractableTextArea;