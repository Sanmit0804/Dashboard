import React, { useState } from 'react';
import PageHeader from '@/components/shared/pageHeader/PageHeader';
import SiteOverviewChart from '@/components/widgetsCharts/SiteOverviewChart';
import VisitorsChart from '@/components/widgetsCharts/VisitorsChart';
import TrafficSourceMiscellaneous from '@/components/widgetsMiscellaneous/TrafficSourceMiscellaneous';
import LeadsStatisticsTwo from '@/components/widgetsStatistics/LeadsStatisticsTwo';
import EmailOverview from '@/components/EmailOverview';
import TopCountryBarChart from '@/components/widgetsCharts/TopCountriyBarChart';
import Browser from '@/components/widgetsList/Browser';
import DeviceUseChart from '@/components/widgetsCharts/DeviceUseChart';
import SelectDropdown from '@/components/shared/SelectDropdown';

const WebsiteAnalysis = () => {
    const [selectedWebsite, setSelectedWebsite] = useState("aloissolutions.com");

    const handleWebsiteChange = (selectedOption) => {
        setSelectedWebsite(selectedOption.value); // Update the state with the selected value
    };

    const websiteOptions = [
        { value: "aloissolutions.com", label: "ALOIS Solutions" },
        { value: "aloiscomposites.com", label: "ALOIS Composites" },
        { value: "aloisexports.com", label: "ALOIS Exports" },
        { value: "aloishealthcare.com", label: "ALOIS Healthcare" },
        { value: "adrivaservices.com", label: "Adriva Business Services" },
        { value: "akinolabs.com", label: "AKINO Labs" }
    ];

    return (
        <>
            <PageHeader />

            <div>
                <SelectDropdown
                    options={websiteOptions}
                    selectedOption={selectedWebsite}  
                    onSelectOption={handleWebsiteChange}  
                    defaultSelect={selectedWebsite}  
                />
            </div>

            <div className="main-content">
                {selectedWebsite && (
                    <div className="row">
                        {/* Conditional Rendering of Analysis based on Selected Website */}
                        <SiteOverviewChart />
                        <VisitorsChart />
                        <TrafficSourceMiscellaneous />
                        <LeadsStatisticsTwo />
                        <EmailOverview />
                        <TopCountryBarChart />
                        <Browser title="Browser Statistics" />
                        <DeviceUseChart />
                    </div>
                )}

                {/* Show message if no website is selected */}
                {!selectedWebsite && (
                    <div className="no-selection-message">
                        <p>Please select a website to view its analysis.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default WebsiteAnalysis;
