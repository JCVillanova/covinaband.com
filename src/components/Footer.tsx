import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Instagram, Youtube } from 'iconsax-reactjs';

function SiteMap() {
    const { basePath } = useRouter();

    return (
        <div id='site-map'>
            <div className='footer-category about'>
                <Link className='footer-header' href='/About'>About</Link>
                <Link className='footer-subtext' href='/About/Staff'>Staff</Link>
                <Link className='footer-subtext' href='/About/Boosters'>Band Boosters</Link>
                <Link className='footer-subtext' href='/About/StudentLeadership'>Student Leadership</Link>
            </div>
            <div className='footer-category ensembles'>
                <Link className='footer-header' href='/Ensembles'>Ensembles</Link>
                <Link className='footer-subtext' href='/Ensembles/MarchingBand'>Marching Band</Link>
                <Link className='footer-subtext' href='/Ensembles/ColorGuard'>Color Guard</Link>
                <Link className='footer-subtext' href='/Ensembles/WinterGuard'>Winter Guard</Link>
                <Link className='footer-subtext' href='/Ensembles/ConcertBand'>Concert Band</Link>
                <Link className='footer-subtext' href='/Ensembles/JazzBand'>Jazz Band</Link>
                <Link className='footer-subtext' href='/Ensembles/LatinBand'>Latin Band</Link>
                <Link className='footer-subtext' href='/Ensembles/PitOrchestra'>Pit Orchestra</Link>
            </div>
            <div className='footer-category shows'>
                <Link className='footer-header' href='/Shows'>Shows</Link>
                <Link className='footer-subtext' href='/Shows/Slither'>2024 (Slither)</Link>
                <Link className='footer-subtext' href='/Shows/OnStage'>2023 (On Stage)</Link>
                <Link className='footer-subtext' href='/Shows/Rise'>2022 (Rise)</Link>
                <Link className='footer-subtext' href='/Shows/Loop'>2021 (Loop)</Link>
                <Link className='footer-subtext' href='/Shows/Poltergeist'>2019 (Poltergeist)</Link>
                <Link className='footer-subtext' href='/Shows/TheFourDimensions'>2021 (The Four Dimensions)</Link>
            </div>
            <div className='footer-category events get-involved'>
                <div>
                    <Link className='footer-header' href='/Events'>Schedule</Link>
                    <Link className='footer-subtext' href='/Events/Calendar'>Calendar</Link>
                </div>
                <hr style={{ borderColor: 'var(--color-red-main)' }}/>
                <div>
                    <Link className='footer-header' href='/GetInvolved'>Get Involved</Link>
                    <Link className='footer-subtext' href='/GetInvolved/Contact'>Contact</Link>
                    <Link className='footer-subtext' href='/GetInvolved/Contact'>Donate</Link>
                </div>
            </div>
        </div>  
    );
}

function IconLinks() {
    return (
        <div className='footer-icon-links'>
            <a className='white-icon-container' href='https://www.instagram.com/coltsmarchingband/' target='_blank'>
                <Instagram size="4rem" variant="Outline"/>
            </a>
            <a className='white-icon-container' href='https://www.youtube.com/channel/UCDKcXes61iYEWyzEy9UREag' target='_blank'>
                <Youtube size="4rem" variant="Outline"/>
            </a>
        </div>
    );
}

function UtilityInfo() {
    return (
        <div>
            <h3 className='footer-header'><span className='red-text'>COVINA</span>BAND&GUARD</h3>
            <p className='footer-subtext'>463 S Hollenbeck Ave, Room E6</p>
            <p className='footer-subtext'>Covina, CA 91723</p>
            <p className='footer-subtext'>(555) 555-5555</p>
            <p className='footer-subtext'>covinabac@gmail.com</p>
        </div>
    );
}

export default function Footer() {
    return (
        <div id='footer'>
            <SiteMap />
            <div className='vertical-divider' style={{ height: '20rem' }}></div>
            <IconLinks />
            <UtilityInfo />
        </div>
    );
}