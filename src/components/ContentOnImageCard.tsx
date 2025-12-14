import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Separator } from 'radix-ui';
import ClickableButton from './Button';

function ContentOnImageCard({ children, className, img, style }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        // Simple toggle
        if (focused == false) {
            setFocused(true);
        } else setFocused(false);
    };

    const { basePath } = useRouter();

    return (
        <div className={className}
            style={style &&
                {
                    border: '2px solid var(--color-text-primary)',
                    borderRadius: '1rem',
                }}
            >
            <div className='card-background' onFocus={handleFocus} onBlur={handleFocus}
                style={{
                    '--bg-img': `url(${basePath}/${img})`,
                    borderRadius: '1rem',
                } as React.CSSProperties}
            >

                <div className=''
                    style={{
                        background: 'linear-gradient(to bottom, var(--color-darkgray-dark), rgba(0, 0, 0, 0.5))',
                        height: 0,
                        paddingTop: '60%',
                        zIndex: 1,
                    }}
                >
                    <div style={{ marginTop: '-60%' }}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default ContentOnImageCard;
