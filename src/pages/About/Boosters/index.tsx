import * as React from 'react';
import { useState } from 'react';
import { Separator } from 'radix-ui';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

// TODO: ADD BOOSTER BIOS

export default function BandBoosters() {
    return (
        <div>
            <div className='secondary-bg'>
                <NavBar />
                <h2 className='center-text'>BAND BOOSTERS</h2>
                <Separator.Root className='horizontal-divider' decorative />
            </div>
            <Footer />
        </div>
    );
}