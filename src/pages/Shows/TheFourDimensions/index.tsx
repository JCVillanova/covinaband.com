import * as React from 'react';
import useState from 'react';
import { fourDimensionsAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function TheFourDimensions() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/the-four-dimensions.png' title='THE FOUR DIMENSIONS' video='https://www.youtube.com/embed/38YfmvoR_JE'
            awards={fourDimensionsAwards}
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}