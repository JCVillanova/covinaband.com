import * as React from 'react';
import useState from 'react';
import { ancientArtOfWarAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import ShowPage from '../../../components/ShowPage';

export default function TheAncientArtOfWar() {
    return (
        <div>
            <div className='primary-bg'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <NavBar />
                <ShowPage className='' backgroundImage='assets/images/show-logos/the-ancient-art-of-war.png' title='THE ANCIENT ART OF WAR' video='https://drive.google.com/file/d/15HBc7U7bVfXZpDHrJ3iyE3GHb7Sy5PEH/preview'
                awards={ancientArtOfWarAwards}
                    style={{
                        display: 'flex',
                        flex: '1 0 auto',
                    }}
                />
            </div>
            <Footer />
        </div>
    );
}