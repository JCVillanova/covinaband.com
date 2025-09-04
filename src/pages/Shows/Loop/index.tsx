import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';

export default function Daredevil() {
    return (
        <div className='primary-bg'>
            <NavBar />
            <h2 className='center-text'>LOOP</h2>
            <hr
                style={{
                    margin: '0 auto 3rem',
                    width: '25vw',
                }}
            />
        </div>
    );
}