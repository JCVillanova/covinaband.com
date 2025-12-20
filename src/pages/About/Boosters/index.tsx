import * as React from 'react';
import { useState } from 'react';
import { Separator } from 'radix-ui';
import ClickableButton from '../../../components/Button';
import Card from '../../../components/Card';
import NavBar from '../../../components/NavBar';
import ProfileCard from '../../../components/ProfileCard';
import Footer from '../../../components/Footer';

// TODO: ADD BOOSTER BIOS

export default function BandBoosters() {
    return (
        <div>
            <div className='secondary-bg'>
                <NavBar />
                <h2 className='center-text'>BAND BOOSTERS</h2>
                <Separator.Root className='horizontal-divider' decorative />
                <div className='profile-cards'>
                    <ProfileCard
                        className=''
                        name='Rocio Garcia'
                        position='Booster President'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <ProfileCard
                        className=''
                        name='Firstname Lastname'
                        position='Booster Role'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <ProfileCard
                        className=''
                        name='Firstname Lastname'
                        position='Booster Role'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <ProfileCard
                        className=''
                        name='Firstname Lastname'
                        position='Booster Role'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <ProfileCard
                        className=''
                        name='Firstname Lastname'
                        position='Booster Role'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <ProfileCard
                        className=''
                        name='Firstname Lastname'
                        position='Booster Role'
                        email='something@example.com'
                        style={{}}
                    >
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes. Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.
                    </ProfileCard>
                    <Card
                        className='extra-profile-card'
                        style={{}}
                    >
                        <p
                            style={{
                                marginLeft: 0,
                                marginRight: 0,
                                textAlign: 'center',
                                textDecoration: 'underline',
                            }}
                        ><strong>Other Boosters</strong></p>
                        <ul className='centered-list'>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                            <li>Firstname Lastname</li>
                        </ul>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}