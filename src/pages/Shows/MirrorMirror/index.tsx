import * as React from 'react';
import useState from 'react';
import { mirrorMirrorAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import ShowPage from '../../../components/ShowPage';

export default function MirrorMirror() {
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
                <ShowPage className='' backgroundImage='assets/images/show-logos/mirror-mirror.png' title='MIRROR MIRROR' video='https://www.youtube.com/embed/DrHrU9Er8eI'
                awards={mirrorMirrorAwards}
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