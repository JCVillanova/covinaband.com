import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Award } from '../data/awards';
import ClickableButton from './Button';

function ShowPage({ className, backgroundImage, title, video, awards, style }) {
    const { basePath } = useRouter();

    const renderedAwards = awards.map((award: Award) =>
        <li key={award.id}>
            <h3>{award.name}</h3>
            <p>{award.text}</p>
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
                <hr
                    style={{
                        margin: '0 auto 3rem',
                        width: '25vw',
                    }}
                />
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

                <ul>{renderedAwards}</ul>
            </div>
        </div>
    );
}

export default ShowPage;