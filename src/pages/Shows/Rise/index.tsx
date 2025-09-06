import * as React from 'react';
import useState from 'react';
import { riseAwards } from '../data';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function Rise() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/rise.png' title='RISE' video='https://www.youtube.com/embed/rv1VQA-3blE'
            awards={riseAwards}
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}