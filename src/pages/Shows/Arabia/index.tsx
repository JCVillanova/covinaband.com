import * as React from 'react';
import useState from 'react';
import { arabiaAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import ShowPage from '../../../components/ShowPage';

export default function Arabia() {
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
                <ShowPage className='' backgroundImage='assets/images/show-logos/arabia.png' title='ARABIA' video='https://www.youtube.com/embed/4UHQMf6INe0'
                awards={arabiaAwards}
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