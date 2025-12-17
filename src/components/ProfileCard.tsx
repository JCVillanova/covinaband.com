import * as React from "react";
import { useState } from "react";
import Card from "./Card";
import { ProfileCircle } from 'iconsax-reactjs';

function ProfileCard({ children, className, style }) {
    return (
        <Card className="" style={{}}>
            <ProfileCircle variant='Outline' size='256' color='var(--color-text-primary)' />
        </Card>
    );
}

export default ProfileCard;
