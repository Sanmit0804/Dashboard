import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/shared/pageHeader/PageHeader';
import Chart from 'react-apexcharts';

const LinkedInStatistics = () => {
    const [followerGrowth, setFollowerGrowth] = useState({
        series: [{
            name: "Followers",
            data: [1500, 1550, 1600, 1700, 1850, 2000, 2200]
        }],
        options: {
            chart: {
                type: 'line',
                height: 350,
                toolbar: {
                    show: false,
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: "Months",
                }
            },
            yaxis: {
                title: {
                    text: "Followers"
                }
            },
            colors: ['#0A66C2'], // LinkedIn brand color
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            }
        }
    });

    const [engagementRate, setEngagementRate] = useState({
        series: [65],
        options: {
            chart: {
                type: 'radialBar',
                height: 350,
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    dataLabels: {
                        value: {
                            fontSize: '22px',
                            show: true,
                        },
                        total: {
                            show: true,
                            label: "Engagement",
                            formatter: () => "65%"
                        }
                    }
                }
            },
            labels: ['Engagement Rate']
        }
    });

    const [postPerformance, setPostPerformance] = useState({
        series: [{
            data: [450, 300, 200, 600, 900]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'],
                title: {
                    text: "Engagement (Likes, Shares, Comments)"
                }
            },
            colors: ['#0073b1'] // LinkedIn lighter color
        }
    });

    return (
        <>
            <PageHeader />
            <div className="main-content">
                <div className="stats-grid">
                    {/* Follower Growth */}
                    <div className="chart-card">
                        <h4>Follower Growth</h4>
                        <Chart options={followerGrowth.options} series={followerGrowth.series} type="line" height={350} />
                    </div>

                    {/* Engagement Rate */}
                    <div className="chart-card">
                        <h4>Engagement Rate</h4>
                        <Chart options={engagementRate.options} series={engagementRate.series} type="radialBar" height={350} />
                    </div>

                    {/* Post Performance */}
                    <div className="chart-card">
                        <h4>Top Post Performance</h4>
                        <Chart options={postPerformance.options} series={postPerformance.series} type="bar" height={350} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinkedInStatistics;
