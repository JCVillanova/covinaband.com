import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import ClickableButton from './Button';

function ShowCard({ className, href, title, img, style }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        // Simple toggle
        if (focused == false) {
            setFocused(true);
        } else setFocused(false);
    };

    return (
        <Link className={className} href={href} style={style}>
            <div className={`animated-border ${focused ? 'focused' : ''}`}
                style={{
                    borderRadius: '0.25rem',
                    height: '25vw',
                    width: '100%',
                }}
            >
                <button onFocus={handleFocus} onBlur={handleFocus}
                    style={{
                        backgroundImage: img,
                        backgroundColor: 'var(--color-darkgray-main)',
                        backgroundPosition: 'center center',
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

                    <div className='show-card-text'
                        style={{
                            height: '100%',
                        }}
                    >
                        <h3
                            style={{
                                position: 'relative',
                            }}
                        >{title}</h3>
                        <hr
                            style={{
                                position: 'relative',
                                margin: 'auto',
                                width: '80%',
                            }}
                        />
                    </div>
                </button>
            </div>
        </Link>
    );
}

export default ShowCard;