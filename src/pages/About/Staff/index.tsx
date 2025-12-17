import * as React from 'react';
import useState from 'react';
import { Separator } from 'radix-ui';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import ProfileCard from '../../../components/ProfileCard';

// TODO: ADD STAFF BIOS

export default function Staff() {
    return (
        <div>
            <div className='secondary-bg'>
                <NavBar />
                <h2 className='center-text'>STAFF</h2>
                <Separator.Root className='horizontal-divider' decorative />
                <ProfileCard className='' style={{}}><></></ProfileCard>
            </div>
            <Footer />
        </div>
    );
}