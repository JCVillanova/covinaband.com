import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";
import useWindowDimensions from "../utils/useWindowDimensions";
import { Accordion } from "radix-ui";
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
    const [opened, setOpened] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openValue, setOpenValue] = useState("none");
    const [buttonText, setButtonText] = useState("More");

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (width !== undefined && width !== null) {
            const isMobile = width < mobileBreakPoint;
            setMobile(isMobile);

            if (!isMobile) {
                setOpenValue("item-1");
            } else {
                // FIXME: (unimportant) when resizing in mobile width range, any open ProfileCards close. This is fine but would be nice to fix
                setOpenValue("none");
            }
        }
    }, [width]);

    if (!mounted) {
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
                        {email === "" ? null : (
                            <p className="profile-card-email">
                                <Link className="link" href={`mailto:${email}`}>
                                    {email}
                                </Link>
                            </p>
                        )}
                        <div className="profile-card-bio">
                            <p>{children}</p>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="profile-card" style={{}}>
            <Accordion.Root
                type="single"
                collapsible
                value={openValue}
                onValueChange={setOpenValue}
            >
                <div className="profile-card-content-container">
                    <ProfileCircle
                        className="profile-card-picture"
                        variant="Outline"
                        size="256"
                        color="var(--color-text-primary)"
                    />
                    <Accordion.Item
                        className="profile-card-content"
                        value="item-1"
                    >
                        <p className="profile-card-title">
                            <strong>
                                {name} - {position}
                            </strong>
                        </p>
                        {
                            // Set email to empty string and it won't show
                            email === "" ? null : (
                                <p className="profile-card-email">
                                    <Link
                                        className="link"
                                        href={`mailto:${email}`}
                                    >
                                        {email}
                                    </Link>
                                </p>
                            )
                        }
                        <Accordion.Content className="profile-card-bio">
                            <p
                                style={{
                                    display: "block",
                                }}
                            >
                                {children}
                            </p>{" "}
                            {/* Bio here */}
                        </Accordion.Content>
                        <Accordion.Header style={{ margin: 0 }}>
                            <Accordion.Trigger
                                className="profile-card-button"
                                style={{
                                    display: mobile ? "block" : "none",
                                }}
                            >
                                <p
                                    onClick={() => {
                                        setOpened(!opened);
                                    }}
                                >
                                    <span
                                        data-open="Collapse"
                                        data-closed="More"
                                    />
                                    <ArrowDown2
                                        className="profile-card-arrow"
                                        variant="Outline"
                                        aria-hidden="true"
                                    />
                                </p>
                            </Accordion.Trigger>
                        </Accordion.Header>
                    </Accordion.Item>
                </div>
            </Accordion.Root>
        </Card>
    );
}

export default ProfileCard;
