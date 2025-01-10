import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiAlignRight, FiArrowLeft } from 'react-icons/fi';

// Utility function to capitalize the first letter of each word
const toTitleCase = (str) =>
    str
        .replace(/-/g, ' ') // Replace dashes with spaces
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

const PageHeader = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const pathName = useLocation().pathname;

    // Split the pathname into parts
    const pathParts = pathName.split('/').filter(Boolean);

    const primaryFolder = pathParts[0] || 'Dashboard'; // First segment or default to 'Dashboard'
    const breadcrumbParts = pathParts.slice(1); // Everything after the first segment

    return (
        <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
                {/* Static Title (Primary Folder) */}
                <div className="page-header-title">
                    <h5 className="m-b-10">{toTitleCase(primaryFolder)}</h5>
                </div>

                {/* Breadcrumb */}
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    {breadcrumbParts.map((part, index) => {
                        const path = `/${pathParts.slice(0, index + 2).join('/')}`;
                        const isLast = index === breadcrumbParts.length - 1;

                        return (
                            <li key={index} className={`breadcrumb-item ${isLast ? '' : 'text-capitalize'}`}>
                                {isLast ? (
                                    toTitleCase(part)
                                ) : (
                                    <Link to={path}>{toTitleCase(part)}</Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="page-header-right ms-auto">
                <div className={`page-header-right-items ${openSidebar ? 'page-header-right-open' : ''}`}>
                    <div className="d-flex d-md-none">
                        <Link to="#" onClick={() => setOpenSidebar(false)} className="page-header-right-close-toggle">
                            <FiArrowLeft size={16} className="me-2" />
                            <span>Back</span>
                        </Link>
                    </div>
                    {children}
                </div>
                <div className="d-md-none d-flex align-items-center">
                    <Link to="#" onClick={() => setOpenSidebar(true)} className="page-header-right-open-toggle">
                        <FiAlignRight className="fs-20" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
