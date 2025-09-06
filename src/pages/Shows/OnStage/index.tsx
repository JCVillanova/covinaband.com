import * as React from 'react';
import useState from 'react';
import { onStageAwards } from '../../../data/awards';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import ShowPage from '../../../components/ShowPage';

export default function OnStage() {
    return (
        <div className='primary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <NavBar />
            <ShowPage className='' backgroundImage='assets/images/show-logos/on-stage.png' title='ON STAGE' video='https://www.youtube.com/embed/0I8Xftrnwvc'
            awards={onStageAwards}
                style={{
                    display: 'flex',
                    flex: '1 0 auto',
                }}
            />
        </div>
    );
}