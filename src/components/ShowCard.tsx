import * as React from 'react';
import { useState } from 'react';

function ShowCard({ className, style }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        // Simple toggle
        if (focused == false) {
            setFocused(true);
        } else setFocused(false);
    };

    return (
        <div className={className} style={style}>
            <div className={`animated-border ${focused ? 'focused' : ''}`}
                style={{
                    borderRadius: '0.25rem',
                    height: '25vw',
                    width: '100%',
                }}
            >
                <button onFocus={handleFocus} onBlur={handleFocus}
                    style={{
                        backgroundImage: 'url(/assets/images/drum-majors-and-guard-captains.png)',
                        backgroundColor: 'var(--color-darkgray-main)',
                        backgroundSize: 'cover',
                        border: 'none',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div // Lighter box that fades in on hover (and fades back out)
                        className='card-hover-anim'
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
                </button>
            </div>
        </div>
    );
}

export default ShowCard;