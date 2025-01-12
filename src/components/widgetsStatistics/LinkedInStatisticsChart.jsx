import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { earningsExpensesChartOption } from '@/utils/chartsLogic/earningsExpensesChartOption';
import { YearDropdown } from '../widgetsCharts/EstimateAreaChartTwo';

const LinkedInStatisticsChart = () => {
    return (
        <div className="col-lg-4">
            <div className="card stretch stretch-full">
                <div className="card-body p-0">
                    <div className="mb-4 border-bottom">
                        <Card
                            name={"Followers"}
                            mony={"(+) 55,236"}
                            description={"Followers is 69% more than last year."}
                            color={"text-success"}
                            chart_color={"#25b865"}
                            seriesData={[25, 60, 70, 90, 95, 100, 125]}  // Followers series data
                        />
                    </div>
                    <div>
                        <Card
                            name={"Likes"}
                            mony={"(-) 16,845"}
                            description={"Likes is 47% more than last year."}
                            color={"text-danger"}
                            chart_color="#d13b4c"
                            seriesData={[40, 55, 65, 80, 85, 80, 70]}  // Likes series data
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkedInStatisticsChart;

const Card = ({ name, mony, description, color, chart_color, seriesData }) => {
    const series = [{
        name: name,
        data: seriesData  // Use the passed seriesData here
    }];
    const colors = [chart_color];
    const chartOption = earningsExpensesChartOption();
    return (
        <>
            <div className="p-4 d-flex align-items-start justify-content-between">
                <div>
                    <div className={`fs-12 fw-semibold mb-2 ${color}`}>{name}</div>
                    <h4 className={`mb-2 ${color}`}>{mony} </h4>
                    <div className="fs-12 text-muted text-truncate-1-line">{description}</div>
                </div>
                <YearDropdown />
            </div>
            <div className='pb-3'>
                <ReactApexChart
                    type='area'
                    options={{...chartOption, colors}}
                    series={series}
                    height={110}
                />
            </div>
        </>
    );
};
