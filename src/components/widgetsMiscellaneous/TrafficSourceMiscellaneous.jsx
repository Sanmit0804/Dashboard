import React from 'react'
import Dropdown from '@/components/shared/Dropdown';
import { optionsMiscellaneous } from './SellingStatusMiscellaneous';
import getIcon from '@/utils/getIcon';
import ReactApexChart from 'react-apexcharts';
import { trafficChartOptions } from '@/utils/chartsLogic/trafficChartOptions';
import CardHeader from '../shared/CardHeader';
const trafficData = [
    { icon: 'feather-airplay', bgClass: 'border-soft-primary', text: 'Organic Traffics', value: '8,865' },
    { icon: 'feather-layers', bgClass: 'border-soft-warning', text: 'Referral Traffics', value: '6,579' },
    { icon: 'feather-dollar-sign', bgClass: 'border-soft-danger', text: 'Paid Search', value: '5,865' },
    { icon: 'fa-linkedin', bgClass: 'border-soft-success', text: 'Social Media', value: '2,354' },
];


const TrafficSourceMiscellaneous = () => {
    const chartOptions = trafficChartOptions()
    return (
        <div className="col-xxl-4">
            <div className="card stretch stretch-full overflow-hidden">
                <CardHeader title={'Traffic Source'} />
                <div className="mb-5">
                    <div className="p-4 d-flex justify-content-between align-items-center">
                        {/* <Dropdown dropdownItems={optionsMiscellaneous} /> */}
                    </div>
                    {/* <ReactApexChart
                        type='area'
                        height={215}
                        options={chartOptions}
                        series={chartOptions.series}
                    /> */}
                </div>
                <div className="card-body">
                    <div className="row g-4">
                        {trafficData.map(({ icon, bgClass, text, value }, index) => (
                            <div key={index} className="col-6">
                                <a href="#" className={`d-block p-4 text-center border border-dashed ${bgClass} rounded position-relative`}>
                                    <div className="avatar-text avatar-md bg-soft-primary text-primary border-soft-primary position-absolute top-0 start-50 translate-middle">
                                        <i className={"lh-1"} >{getIcon(icon)}</i>
                                    </div>
                                    <div>
                                        <div className="fs-12 text-muted mb-2">{text}</div>
                                        <h3>{value}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TrafficSourceMiscellaneous