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
                <ProfileCard
                    className=''
                    name='Daniel Franco'
                    position='Director of Bands'
                    email='dfranco@c-vusd.org'
                    style={{}}
                >
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </p>
                </ProfileCard>
            </div>
            <Footer />
        </div>
    );
}