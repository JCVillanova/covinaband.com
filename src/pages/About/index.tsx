import * as React from 'react';
import { useState } from 'react';
import Card from '../../components/Card';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// TODO: POPULATE ABOUT PAGE

export default function About() {
    return (
        <div>
            <div className='secondary-bg'>
                <NavBar />
                <h2>About</h2>

                <div className='about-cards'>
                    <Card className='about-card' style={{}}>
                        <h3>Staff</h3>
                        <p>
                            Leading this program requires dedicated people who are invested in our students' success and growth, not just as musicians, but as people. We
                            have a wonderful team of staff who share this philosophy and are committed to making Covina's band and guard the most enjoyable and fulfilling
                            program it can be.
                        </p>
                        <ClickableButton className='' buttonSize='medium' buttonColor='transparent' buttonText='View staff' style={{}} />
                    </Card>
                    <Card className='about-card' style={{}}>
                        <h3>Boosters</h3>
                        <p>
                            Our boosters do incredible work to assist at competitions, support the program, and connect with band families. With many of them being
                            current band parents, they are vital to our community.
                        </p>
                        <ClickableButton className='' buttonSize='medium' buttonColor='transparent' buttonText='View boosters' style={{}} />
                        <ClickableButton className='' buttonSize='medium' buttonColor='transparent' buttonText='Become a booster' style={{}} />
                    </Card>
                    <Card className='about-card' style={{}}>
                        <h3>Students</h3>
                        <p>
                            Covina's band and guard would not be possible without the help of student leadership. These inspiring young leaders work tirelessly to help
                            their peers achieve their fullest potential and are instrumental to the program's operation.
                        </p>
                        <ClickableButton className='' buttonSize='medium' buttonColor='transparent' buttonText='View leaders' style={{}} />
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}