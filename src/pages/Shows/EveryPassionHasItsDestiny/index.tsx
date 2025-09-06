import * as React from 'react';
import useState from 'react';
import { everyPassionAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function EveryPassionHasItsDestiny() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/every-passion-has-its-destiny.png' title='EVERY PASSION HAS ITS DESTINY' video='https://www.youtube.com/embed/kwQs3MJfvwM'
            awards={everyPassionAwards}
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}