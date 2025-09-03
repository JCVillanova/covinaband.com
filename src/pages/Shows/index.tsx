import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import ShowCard from '../../components/ShowCard';

export default function Shows() {
    return (
        <div className='primary-bg'>
            <NavBar />
            <h2 className='center-text'>Shows</h2>

            <div className='shows-grid'>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
                <ShowCard className='' style={{}}/>
            </div>
        </div>
    );
}