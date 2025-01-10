export const visitorsOverviewChartOption = () => {
    const chartOption = {
        chart: {
            height: 370,
            type: "area",
            stacked: !1,
            toolbar: {
                show: !1
            },
        },
        xaxis: {
            categories: ["JAN/24", "FEB/24", "MAR/24", "APR/24", "MAY/24", "JUN/24", "JUL/24"],
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                style: {
                    fontSize: "11px",
                    colors: "#64748b"
                }
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                formatter: function (e) {
                    return +e + "K";
                },
                offsetX: -15,
                offsetY: 0,
                style: {
                    fontSize: "11px",
                    colors: "#64748b"
                },
            },
        },
        stroke: {
            curve: "smooth",
            width: [1, 1, 1, 1],
            dashArray: [3, 3, 3, 3],
            lineCap: "round"
        },
        grid: {
            padding: {
                left: 10,
                right: 0,
            },
            strokeDashArray: 3,
            borderColor: "#ebebf3",
            row: {
                colors: ["#ebebf3", "transparent"],
                opacity: 0.02
            },
        },
        legend: {
            show: !1
        },
        colors: ["#3454d1", "#25b865", "#d13b4c"],
        dataLabels: {
            enabled: !1
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        series: [
            { name: "Visitors", data: [20, 45, 10, 75, 35, 80, 40], type: "area" },
            { name: "Unique Visitors", data: [10, 40, 9, 50, 25, 50, 30], type: "area" },
            { name: "Leads", data: [5, 40, 2, 45, 20, 25, 15], type: "area" },
        ],
        tooltip: {
            y: {
                formatter: function (e) {
                    return +e + "K";
                },
            },
            style: { fontSize: "12px", fontFamily: "Inter" },
        },
    }

    return chartOption
}