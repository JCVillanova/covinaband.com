import * as React from 'react';
import useState from 'react';
import { daredevilAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function Daredevil() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/daredevil.png' title='DAREDEVIL' video='https://www.youtube.com/embed/clWZWMB9v4I'
            awards={daredevilAwards}
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}