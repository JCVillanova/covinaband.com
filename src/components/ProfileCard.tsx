import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";
import useWindowDimensions from "../utils/useWindowDimensions";
import { ArrowDown2, ProfileCircle } from "iconsax-reactjs";

function ProfileCard({
    children,
    className,
    name,
    position,
    email = "",
    style,
}) {
	const { width } = useWindowDimensions();
	const mobileBreakPoint = 1024;
	const [mobile, setMobile] = useState(false);
    const [opened, setOpened] = useState(false);

	useEffect(() => {
		if (width < mobileBreakPoint)
			setMobile(true);
		else
			setMobile(false);
	}, [width]);

    return (
        <Card className="profile-card" style={{}}>
            <div className="profile-card-content-container">
                <ProfileCircle
                    className="profile-card-picture"
                    variant="Outline"
                    size="256"
                    color="var(--color-text-primary)"
                />
                <div className="profile-card-content">
                    <p className="profile-card-title">
                        <strong>
                            {name} - {position}
                        </strong>
                    </p>
                    {
                        // Set email to empty string and it won't show
                        email === "" ? null : (
                            <p className="profile-card-email">
                                <Link className="link" href={`mailto:${email}`}>
                                    {email}
                                </Link>
                            </p>
                        )
                    }
                    <div
                        style={{
                            display: ((mobile && opened) || !mobile) ? 'block' : 'none',
                        }}
                    >
                        <p className="profile-card-bio">{children}</p>{" "}
                        {/* Bio here */}
                    </div>
					<div
						className='profile-card-button'
						style={{
							display: mobile ? 'block' : 'none',
						}}
					>
						<p
							style={{
								
							}}
						>
							More
							<ArrowDown2 className='profile-card-arrow' variant='Outline' aria-hidden='true' />
						</p>
					</div>
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;
