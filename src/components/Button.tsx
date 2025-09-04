import * as React from 'react';
import { useState } from 'react';

function ClickableButton({ className, buttonSize, buttonColor, buttonText, style }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // Immediately reset clicked state to false: this removes the clicked class from the animated component, allowing it to be added
        // again on a rapid subsequent click (retriggering the animation in case it hasn't finished the first time). This is a rather
        // unnecessary edgecase, but it's still nice to have
        setClicked(false);
        setTimeout(() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 400); // Set clicked back to false after the animation plays
        }, 10);
    };

    return (
        <div className={className} style={style}>
            <div
                style={{
                    borderRadius: buttonSize == 'large' ? '1rem' : buttonSize == 'medium' ? '0.8rem' : '0.5rem',
                    height: 'fit-content',
                    width: 'fit-content',
                }}
            >
                <div className={`animated-border ${buttonSize}`}
                    style={{
                        borderRadius: buttonSize == 'large' ? '1rem' : buttonSize == 'medium' ? '0.8rem' : '0.5rem',
                    }}
                >
                    <button
                        onClick={handleClick}
                        style={{
                            backgroundColor: buttonColor == 'dark' ? 'var(--color-darkgray-main)' : buttonColor == 'transparent' ? 'var(--color-transparent)' : 'var(--color-lightgray-light)',
                            border: 'none',
                            borderRadius: buttonSize == 'large' ? '1rem' : buttonSize == 'medium' ? '0.8rem' : '0.5rem',
                            overflow: 'hidden',
                            padding: buttonSize == 'large' ? '1.5rem 3rem' : buttonSize == 'medium' ? '1rem 2rem' : '0.75rem 1.5rem',
                            position: 'relative',
                        }}
                    >
                        <div // Lighter box that fades in on hover (and fades back out)
                            className='button-hover-anim'
                            style={{
                                backgroundColor: '#6c6c6c',
                                height: '100%',
                                inset: 0,
                                opacity: 0,
                                position: 'absolute',
                                width: '100%',
                                zIndex: 0,
                            }}
                        ></div>
                        <div // Another diagonal box that expands from center of button on click (then shrinks)
                            className={`button-click-anim ${clicked ? 'clicked' : ''}`}
                            style={{
                                backgroundColor: '#8c8c8c',
                                bottom: '-200%',
                                height: '500%',
                                position: 'absolute',
                                right: '50%',
                                width: '0%',
                                zIndex: 0,
                                WebkitTransform: 'skewX(-45deg)',
                            }}
                        ></div>
                        <p
                            className='button-text'
                            style={{
                                // Change the font size of text based on button's size
                                fontSize: buttonSize == 'large' ? '2rem' : buttonSize == 'medium' ? '1.5rem' : '1rem',
                                lineHeight: 1,
                                margin: '0 1rem',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >{ buttonText }</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClickableButton;