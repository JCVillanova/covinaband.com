import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Card({ children, className, style }) {
    const { basePath } = useRouter();

    return (
        <div style={style}>
            <div className={`${className} card`}>
                {children}
            </div>
        </div>
    );
}

export default Card;