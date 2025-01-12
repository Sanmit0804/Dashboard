import React from 'react'
import getIcon from '@/utils/getIcon';
import { FiFigma } from 'react-icons/fi';

const statisticsData = [
    { amount: '2,07,935', description: 'Total Followers', icon: 'feather-users', bgColor: 'bg-primary' },
    { amount: '23,485', description: 'Connections', icon: 'pi-handshake', bgColor: 'bg-success' },
    { amount: '2,364', description: 'Post Shares', icon: 'fa-share-square', bgColor: 'bg-warning' },
    { amount: '96,485', description: 'Search Appearances', icon: 'feather-bar-chart-2', bgColor: 'bg-teal' }
];

const LinkedInStatisticsCard = () => {
    return (
        <>
            {statisticsData.map(({ amount, description, icon, bgColor }, index) => (
                <div key={index} className="col-xxl-3 col-md-6">
                    <div className="card card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-3">
                                <h5 className="fs-4">{amount}</h5>
                                <span className="text-muted">{description}</span>
                            </div>
                            <div className={`avatar-text avatar-lg ${bgColor} text-white rounded`}>
                                <i>{React.cloneElement(getIcon(icon), {size:"16", strokeWidth:"2.4"})}</i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default LinkedInStatisticsCard