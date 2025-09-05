import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function TheAncientArtOfWar() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/the-ancient-art-of-war.png' title='THE ANCIENT ART OF WAR'
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}