import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Award } from '../data/awards';
import ClickableButton from './Button';
import { Separator } from 'radix-ui';

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