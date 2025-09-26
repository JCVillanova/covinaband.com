import * as React from 'react';
import { useState } from 'react';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

// TODO: ADD BOOSTER BIOS

export default function BandBoosters() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <h2>Band Boosters</h2>
            </div>
            <Footer />
        </div>
    );
}