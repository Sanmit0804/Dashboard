import React, { useState } from "react";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import SocilMediaStatistics from "@/components/widgetsStatistics/SocialMediaStatistics";
import SocialPiplelineChart from "./SocialPipelineChart";
import SelectDropdown from "@/components/shared/SelectDropdown";
import ChatDrawer from "@/components/widgetsStatistics/ChatDrawer";
import Export from "@/components/widgets/Export";

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

    const handleWebsiteChange = (selectedOption) => {
        setSelectedWebsite(selectedOption.value);
    };

    const handleFileUpload = (file) => {
        console.log("Uploaded file:", file);
        // Handle the uploaded file (e.g., parse it or send it to the backend)
    };

    const websiteOptions = [
        { value: "aloissolutions.com", label: "ALOIS Solutions" },
        { value: "aloiscomposites.com", label: "ALOIS Composites" },
        { value: "aloisexports.com", label: "ALOIS Exports" },
        { value: "aloishealthcare.com", label: "ALOIS Healthcare" },
        { value: "adrivaservices.com", label: "Adriva Business Services" },
        { value: "akinolabs.com", label: "AKINO Labs" },
    ];

    const samplePrompts = [
        "Show me today's social media stats.",
        "Generate a report for LinkedIn activity.",
        "What is the best-performing post this week?",
        "Provide insights for Instagram growth.",
        "Show analytics for Facebook.",
    ];

    const availableSocialMedia = websiteSocialMediaMapping[selectedWebsite] || [];

    return (
        <>
            <PageHeader>
                <div className="d-flex gap-2">
                    <Export onFileUpload={handleFileUpload} />
                    <ChatDrawer samplePrompts={samplePrompts} />
                </div>
            </PageHeader>

            <div>
                <SelectDropdown
                    options={websiteOptions}
                    selectedOption={selectedWebsite}
                    onSelectOption={handleWebsiteChange}
                    defaultSelect={selectedWebsite}
                />
            </div>

            <div className="main-content">
                <div className="row">
                    {availableSocialMedia.includes("facebook") && (
                        <SocilMediaStatistics platform="facebook" />
                    )}
                    {availableSocialMedia.includes("instagram") && (
                        <SocilMediaStatistics platform="instagram" />
                    )}
                    {availableSocialMedia.includes("linkedin") && (
                        <SocilMediaStatistics platform="linkedin" />
                    )}
                    {availableSocialMedia.includes("x") && (
                        <SocilMediaStatistics platform="x" />
                    )}

                    <SocialPiplelineChart isFooterShow={true} />
                </div>
            </div>
        </>
    );
};

export default SocialMediaPerformance;
