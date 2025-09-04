import * as React from 'react';
import { useState } from 'react';
import ClickableButton from './Button';

function ShowPage({ className, backgroundImage, title, style }) {
    return (
        <div style={style}>
            <div
                style={{
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backgroundImage: backgroundImage,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    flexGrow: 1,
                    width: '100%',
                }}
            >
                <h2 className='center-text'>{title}</h2>
                <hr
                    style={{
                        margin: '0 auto 3rem',
                        width: '25vw',
                    }}
                />
            </div>
        </div>
    );
}

export default ShowPage;