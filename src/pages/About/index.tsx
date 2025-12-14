import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '../../components/Card';
import ClickableButton from '../../components/Button';
import ContentOnImageCard from '../../components/ContentOnImageCard'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Separator } from 'radix-ui';

import AboutImage from '../../../public/assets/images/full-band-2024.png';

// TODO: POPULATE ABOUT PAGE

export default function About() {
  const [buttonSize, setButtonSize] = useState(null);

  useEffect(() => {
    const buttonThreshold = window.matchMedia('(max-width: 1280px)');
    const handleResize = (event) => {
      setButtonSize(event.matches ? 'small' : 'medium');
    };

    setButtonSize(buttonThreshold.matches ? 'small' : 'medium');

    buttonThreshold.addEventListener('change', handleResize);
    return () => buttonThreshold.removeEventListener('change', handleResize);
  }, []);

  if (buttonSize === null) return null;

  return (
    <div>
      <div className='secondary-bg'>
        <NavBar />
        <h2 className='center-text'>ABOUT</h2>
        <Separator.Root className='horizontal-divider' decorative />

        <div className='about-cards'>
          <ContentOnImageCard className='' img='assets/images/full-band-2024.png' style={{}}>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes.</p>

            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit.</p>
          </ContentOnImageCard>
          <Card className='about-card' style={{}}>
            <h3>Staff</h3>
            <Separator.Root className='horizontal-divider card-divider' decorative />
            <p>
              Leading this program requires dedicated people who are invested in our students' success and growth, not just as musicians, but as people. We
              have a wonderful team of staff who share this philosophy and are committed to making Covina's band and guard the most enjoyable and fulfilling
              program it can be.
            </p>
            <ClickableButton className='' buttonSize={buttonSize} buttonColor='transparent' buttonText='View staff' style={{}} />
          </Card>
          <Card className='about-card' style={{}}>
            <h3>Boosters</h3>
            <Separator.Root className='horizontal-divider card-divider' decorative />
            <p>
              Our boosters do incredible work to assist at competitions, support the program, and connect with band families. With many of them being
              current band parents, they are vital to our community.
            </p>
            <div className='about-buttons'>
              <ClickableButton className='' buttonSize={buttonSize} buttonColor='transparent' buttonText='View boosters' style={{}} />
              <ClickableButton className='' buttonSize={buttonSize} buttonColor='transparent' buttonText='Become a booster' style={{}} />
            </div>
          </Card>
          <Card className='about-card' style={{}}>
            <h3>Students</h3>
            <Separator.Root className='horizontal-divider card-divider' decorative />
            <p>
              Covina's band and guard would not be possible without the help of student leadership. These inspiring young leaders work tirelessly to help
              their peers achieve their fullest potential and are instrumental to the program's operation.
            </p>
            <ClickableButton className='' buttonSize={buttonSize} buttonColor='transparent' buttonText='View leaders' style={{}} />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
