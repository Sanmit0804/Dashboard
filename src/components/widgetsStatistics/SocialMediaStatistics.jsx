import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import getIcon from '@/utils/getIcon';
import AnimatedNumbers from 'react-animated-numbers'; // Import the AnimatedNumbers component

const socialMediaData = [
    { platform: 'facebook', users: 563, icon: 'fa-facebook', color: 'blue' },
    { platform: 'x', users: 62, icon: 'fa-x', color: 'black' },
    { platform: 'linkedIn', users: 207935, icon: 'fa-linkedin', color: 'indigo' },
    { platform: 'Instagram', users: 9212, icon: 'feather-instagram', background: 'card-instagram' }
];

const SocilMediaStatistics = ({ platform }) => {
    const navigate = useNavigate(); // Get navigate function

    // Function to handle redirection on card click
    const handleCardClick = (platform) => {
        const route = `/digital-marketing/social-media-performance/${platform}-statistics`; // Construct the route
        navigate(route); // Navigate to the constructed route
    };

    return (
        <>
            {socialMediaData
                .filter(data => data.platform.toLowerCase() === platform.toLowerCase()) // Filter by the selected platform
                .map(({ platform, users, icon, color, background }, index) => {
                    // Split the number into the main part and the last two digits
                    const usersString = users.toString();
                    const mainPart = usersString.slice(0, usersString.length - 2);
                    const lastTwoDigits = usersString.slice(usersString.length - 2);

                    return (
                        <div key={index} className="col-xxl-3 col-md-6">
                            <div
                                className={`social-media-card card card-body bg-${color} text-white position-relative ${background}`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleCardClick(platform)} // Handle click to redirect
                            >
                                <div style={{ minHeight: '3.5rem' }}>
                                    <div className='d-flex'>

                                    {/* Display the main part of the number */}
                                    <span className="text-reset" style={{ fontSize: 30, color: 'white' }} >
                                        {mainPart}
                                    </span>
                                    
                                    {/* Animate only the last two digits */}
                                    <AnimatedNumbers
                                        animateToNumber={parseInt(lastTwoDigits)}
                                        includeComma
                                        className="text-reset"
                                        transitions={(index) => ({
                                            type: 'spring',
                                            duration: 1, // Set animation duration to 1 second
                                        })}
                                        fontStyle={{
                                            fontSize: 30, // Keep the font size small for the animated part
                                            color: 'white', // Ensure it contrasts well
                                        }}
                                        />
                                        </div>
                                    
                                    <span className="mt-2 text-capitalize">{platform} Followers</span>
                                    <div className="position-absolute top-50 end-0 translate-middle">
                                        <i className={`fs-1`}>{getIcon(icon)}</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default SocilMediaStatistics;
