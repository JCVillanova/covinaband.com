import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { ProfileCircle } from 'iconsax-reactjs';

function ProfileCard({ children, className, name, position, email = '', style }) {
    return (
        <Card className='profile-card' style={{}}>
            <ProfileCircle className='profile-card-picture' variant='Outline' size='256' color='var(--color-text-primary)' />
			<div className="profile-card-content">
				<p className='profile-card-title'><strong>{name} - {position}</strong></p>
				{  // Set email to empty string and it won't show
					email === '' ? null :
					<p className='profile-card-email'>
						<Link className='link' href={`mailto:${email}`}>{email}</Link>
					</p>
				}
				<p className='profile-card-bio'>{children}</p> { /* Bio here */ }
			</div>
        </Card>
    );
}

export default ProfileCard;
