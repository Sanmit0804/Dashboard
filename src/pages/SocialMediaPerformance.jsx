import React, { useState } from 'react';
import PageHeader from '@/components/shared/pageHeader/PageHeader';
import SocialMediaStatisticsChart from '@/components/widgetsCharts/SocialMediaStatisticsChart';
import SocilMediaStatistics from '@/components/widgetsStatistics/SocialMediaStatistics';
import SalesPipelineChart from '@/components/widgetsCharts/SalesPipelineChart';
import SocialPiplelineChart from './SocialPipelineChart';
import SelectDropdown from '@/components/shared/SelectDropdown';
import ChatDrawer from '@/components/widgetsStatistics/ChatDrawer';
import { RiAiGenerate } from "react-icons/ri";
import {
    CButton,
    CCloseButton,
    CContainer,
    CDropdown,
    CDropdownItem,
    CDropdownDivider,
    CDropdownMenu,
    CDropdownToggle,
    CForm,
    CFormInput,
    CNavbar,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CNavItem,
    CNavLink,
    COffcanvas,
    COffcanvasBody,
    COffcanvasHeader,
    COffcanvasTitle,
} from '@coreui/react'


const websiteSocialMediaMapping = {
    "aloissolutions.com": ["facebook", "x", "linkedin", "instagram"],
    "aloiscomposites.com": ["linkedin", "x"],
    "aloisexports.com": ["facebook", "linkedin", "x"],
    "aloishealthcare.com": ["instagram", "linkedin"],
    "adrivaservices.com": ["x", "linkedin"],
    "akinolabs.com": ["instagram", "linkedin"],
};

const SocialMediaPerformance = () => {
    const [selectedWebsite, setSelectedWebsite] = useState("aloissolutions.com");
    const [visible, setVisible] = useState(false);

    const handleWebsiteChange = (selectedOption) => {
        setSelectedWebsite(selectedOption.value);
    };

    const websiteOptions = [
        { value: "aloissolutions.com", label: "ALOIS Solutions" },
        { value: "aloiscomposites.com", label: "ALOIS Composites" },
        { value: "aloisexports.com", label: "ALOIS Exports" },
        { value: "aloishealthcare.com", label: "ALOIS Healthcare" },
        { value: "adrivaservices.com", label: "Adriva Business Services" },
        { value: "akinolabs.com", label: "AKINO Labs" }
    ];

    // Get the social media platforms for the selected website
    const availableSocialMedia = websiteSocialMediaMapping[selectedWebsite] || [];

    return (
        <>
            <PageHeader>
                <button
                    className="btn btn-primary"
                    onClick={() => setVisible(true)}
                    style={{ padding: '7px 10px' }}
                >
                    <RiAiGenerate size={'20px'} /> &nbsp; Create
                </button>

                {/* <ChatDrawer/> */}
            </PageHeader>

            <COffcanvas
                id="offcanvasNavbar"
                placement="end"
                portal={false}
                visible={visible}
                onHide={() => setVisible(false)}
                style={{width: '600px'}}
            >
                <COffcanvasHeader>
                    <COffcanvasTitle></COffcanvasTitle>
                    <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                </COffcanvasHeader>
                <COffcanvasBody>
                    <CForm className="d-flex">
                        <CFormInput type="search" className="me-2" placeholder="Search" />
                        <CButton type="submit" className='btn btn-primary'>
                            Search
                        </CButton>
                    </CForm>
                </COffcanvasBody>
            </COffcanvas>

            <div>
                <SelectDropdown
                    options={websiteOptions}
                    selectedOption={selectedWebsite}
                    onSelectOption={handleWebsiteChange}
                    defaultSelect={selectedWebsite}
                />
            </div>

            <div className='main-content'>
                <div className='row'>
                    {availableSocialMedia.includes("facebook") && <SocilMediaStatistics platform="facebook" />}
                    {availableSocialMedia.includes("instagram") && <SocilMediaStatistics platform="instagram" />}
                    {availableSocialMedia.includes("linkedin") && <SocilMediaStatistics platform="linkedin" />}
                    {availableSocialMedia.includes("x") && <SocilMediaStatistics platform="x" />}

                    <SocialPiplelineChart isFooterShow={true} />
                </div>
            </div>
        </>
    );
};

export default SocialMediaPerformance;
