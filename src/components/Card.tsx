import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Card({ children, className, style }) {
    const { basePath } = useRouter();

    return (
        <div style={style}>
            <div className={`${className} card`}
                style={{
                    border: '2px solid var(--color-text-primary)',
                    borderRadius: '1rem',
                    margin: 'auto',
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Card;