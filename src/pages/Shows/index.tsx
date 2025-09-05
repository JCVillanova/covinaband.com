import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import ShowCard from '../../components/ShowCard';

export default function Shows() {
    return (
        <div className='primary-bg'>
            <NavBar />
            <h2 className='center-text'>SHOWS</h2>
            <hr
                style={{
                    margin: '0 auto 3rem',
                    width: '25vw',
                }}
            />

            <div className='shows-grid'>
                <ShowCard className='no-text-decoration' href='/Shows/Slither' title='Slither (2024)' img='assets/images/show-logos/slither.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/OnStage' title='On Stage (2023)' img='assets/images/show-logos/on-stage.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/Rise' title='Rise (2022)' img='assets/images/show-logos/rise.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/Loop' title='Loop (2021)' img='assets/images/drum-majors-and-guard-captains.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/Poltergeist' title='Poltergeist (2019)' img='assets/images/show-logos/poltergeist.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/TheFourDimensions' title='The Four Dimensions (2018)' img='assets/images/show-logos/the-four-dimensions.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/TheAncientArtOfWar' title='The Ancient Art of War (2017)' img='assets/images/show-logos/the-ancient-art-of-war.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/Daredevil' title='Daredevil (2016)' img='assets/images/show-logos/daredevil.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/MirrorMirror' title='Mirror Mirror (2015)' img='assets/images/show-logos/mirror-mirror.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/Arabia' title='Arabia (2014)' img='assets/images/show-logos/arabia.png' style={{}}/>
                <ShowCard className='no-text-decoration' href='/Shows/EveryPassionHasItsDestiny' title='Every Passion Has Its Destiny (2013)' img='assets/images/show-logos/every-passion-has-its-destiny.png' style={{}}/>
            </div>
        </div>
    );
}