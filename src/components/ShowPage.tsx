import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Award } from '../data/awards';
import Card from './Card';
import ClickableButton from './Button';
import { Separator } from 'radix-ui';

function ShowPage({ className, backgroundImage, title, video, awards, style }) {
    const { basePath } = useRouter();

    const renderedAwards = awards.map((award: Award) =>
        <li className='awards-list-child no-list-style' key={award.id}>
            <Card className='award-card' style={{}}>
                <h3>{award.name}</h3>
                <Separator.Root className='horizontal-divider award-divider' decorative
                    style={{
                        marginBottom: 0,
                    }}
                />
                <p>{award.text}</p>
            </Card>
        </li>
    );

    return (
        <div style={style}>
            <div
                style={{
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backgroundImage: `url(${basePath}/${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    flexGrow: 1,
                    width: '100%',
                }}
            >
                <h2 className='center-text'>{title}</h2>
                <Separator.Root className='horizontal-divider' decorative />
                <div className='animated-border'
                    style={{
                        borderRadius: '1rem',
                        margin: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <iframe className='show-video' src={video} allowFullScreen
                        style={{
                            
                        }}
                    ></iframe>
                </div>

                <ul className='award-list'>{renderedAwards}</ul> {/* TODO: FIX LAYOUT OF SHOWPAGE AWARD TEXT */}
            </div>
        </div>
    );
}

export default ShowPage;