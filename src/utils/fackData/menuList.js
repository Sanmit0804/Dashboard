export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "#",
        icon: 'feather-airplay',
        dropdownMenu: [
            {
                id: 1,
                name: "CRM",
                path: "/",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Analytics",
                path: "/dashboards/analytics",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 1,
        name: "HR (Human Resource)",
        path: "#",
        icon: 'feather-users',
        dropdownMenu: [
            {
                id: 1,
                name: "Hiring Report",
                path: "/reports/sales",
                subdropdownMenu: false,
            },
            {
                id: 2,
                name: "Attrition Rate",
                path: "",
                subdropdownMenu: false,
            },
            {
                id: 3,
                name: "Gender Ratio",
                path: "",
                subdropdownMenu: false,
            },
            {
                id: 4,
                name: "Headcount Overview",
                path: "",
                subdropdownMenu: false,
            },
        ]
    },
    {
        id: 2,
        name: "CR (Corporate Recruiter)",
        path: '#',
        icon: 'feather-send',
        dropdownMenu: [
            {
                id: 1,
                name: "Recruitment Metrics",
                path: "/applications/chat",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Candidate Analytics",
                path: "/applications/email",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Candidate Experience Metrics",
                path: "/applications/tasks",
                subdropdownMenu: false
            },
            {
                id: 4,
                name: "Hiring Trends",
                path: "/applications/notes",
                subdropdownMenu: false
            },
            {
                id: 5,
                name: "Employee Referrals",
                path: "/applications/storage",
                subdropdownMenu: false
            },
        ]
    },
    {
        id: 3,
        name: "DM (Digital Marketing)",
        path: "#",
        icon: 'feather-dollar-sign',
        dropdownMenu: [
            {
                id: 1,
                name: "Website Analysis",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Website Traffic",
                        subdropdownMenu: false,
                    },
                    {
                        id: 2,
                        name: "Bounce Rate",
                        subdropdownMenu: false,
                    },
                    {
                        id: 3,
                        name: "Average Session Duration",
                        subdropdownMenu: false,
                    },
                    {
                        id: 4,
                        name: "Top Pages Visited",
                        subdropdownMenu: false,
                    },
                    {
                        id: 5,
                        name: "Traffic Sources",
                        subdropdownMenu: false,
                    },
                ],
            },
            {
                id: 2,
                name: "Social Media Performance",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Engagement Metrics",
                    },
                    {
                        id: 2,
                        name: "Followers Growth",
                    },
                    {
                        id: 3,
                        name: "Impressions & Reach",
                    },
                ]
            },
        ],
    },
    {
        id: 4,
        name: "Labs",
        path: "#",
        icon: 'feather-layout',
        dropdownMenu: [
            {
                id: 1,
                name: "Payment",
                path: "/payment/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Invoice View",
                path: "/payment/view",
                subdropdownMenu: false
            },
            {
                id: 4,
                name: "Invoice Create",
                path: "/payment/create",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 5,
        name: "L&D",
        path: "#",
        icon: 'feather-users',
        dropdownMenu: [
            {
                id: 1,
                name: "Courses",
                path: "/customers/list",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Course Completion Rates",
                path: "/customers/view",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Employee Certifications",
                path: "/customers/create",
                subdropdownMenu: false
            },
            {
                id: 4,
                name: "Learning Hours",
                path: "/customers/create",
                subdropdownMenu: false
            }
        ]
    },
    // {
    //     id: 6,
    //     name: "leads",
    //     path: "#",
    //     icon: 'feather-alert-circle',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Leads",
    //             path: "/leads/list",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "Leads View",
    //             path: "/leads/view",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Leads Create",
    //             path: "/leads/create",
    //             subdropdownMenu: false
    //         }
    //     ]
    // },
    // {
    //     id: 7,
    //     name: "projects",
    //     path: "#",
    //     icon: 'feather-briefcase',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Projects",
    //             path: "/projects/list",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "Projects View",
    //             path: "/projects/view",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Projects Create",
    //             path: "/projects/create",
    //             subdropdownMenu: false
    //         }
    //     ]
    // },
    // {
    //     id: 8,
    //     name: "widgets",
    //     path: "#",
    //     icon: 'feather-layout',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Lists",
    //             path: "/widgets/lists",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "Tables",
    //             path: "/widgets/tables",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Charts",
    //             path: "/widgets/charts",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 4,
    //             name: "Statistics",
    //             path: "/widgets/statistics",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 5,
    //             name: "Miscellaneous",
    //             path: "/widgets/miscellaneous",
    //             subdropdownMenu: false
    //         },
    //     ]
    // },
    // {
    //     id: 9,
    //     name: "settings",
    //     path: "#",
    //     icon: 'feather-settings',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Ganeral",
    //             path: "/settings/ganeral",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "SEO",
    //             path: "/settings/seo",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Tags",
    //             path: "/settings/tags",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 4,
    //             name: "Email",
    //             path: "/settings/email",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 5,
    //             name: "Tasks",
    //             path: "/settings/tasks",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 6,
    //             name: "Leads",
    //             path: "/settings/leads",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 7,
    //             name: "Support",
    //             path: "/settings/Support",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 8,
    //             name: "Finance",
    //             path: "/settings/finance",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 9,
    //             name: "Gateways",
    //             path: "/settings/gateways",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 10,
    //             name: "Customers",
    //             path: "/settings/customers",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 11,
    //             name: "Localization",
    //             path: "/settings/localization",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 12,
    //             name: "reCAPTCHA",
    //             path: "/settings/recaptcha",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 13,
    //             name: "Miscellaneous",
    //             path: "/settings/miscellaneous",
    //             subdropdownMenu: false
    //         },
    //     ]
    // },
    // {
    //     id: 10,
    //     name: "authentication",
    //     path: "#",
    //     icon: 'feather-power',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "login",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/login/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/login/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/login/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 2,
    //             name: "register",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/register/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/register/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/register/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 3,
    //             name: "Error 404",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/404/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/404/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/404/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 4,
    //             name: "Reset Pass",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/reset/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/reset/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/reset/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 5,
    //             name: "Verify OTP",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/verify/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/verify/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/verify/creative",
    //                 },
    //             ]
    //         },
    //         {
    //             id: 6,
    //             name: "Maintenance",
    //             path: "#",
    //             subdropdownMenu: [
    //                 {
    //                     id: 1,
    //                     name: "Cover",
    //                     path: "/authentication/maintenance/cover",
    //                 },
    //                 {
    //                     id: 2,
    //                     name: "Minimal",
    //                     path: "/authentication/maintenance/minimal",
    //                 },
    //                 {
    //                     id: 3,
    //                     name: "Creative",
    //                     path: "/authentication/maintenance/creative",
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 11,
    //     name: "Help Center",
    //     path: "#",
    //     icon: 'feather-life-buoy',
    //     dropdownMenu: [
    //         {
    //             id: 1,
    //             name: "Support",
    //             path: "https://themeforest.net/user/theme_ocean",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 2,
    //             name: "KnowledgeBase",
    //             path: "/help/knowledgebase",
    //             subdropdownMenu: false
    //         },
    //         {
    //             id: 3,
    //             name: "Documentations",
    //             path: "/documentations",
    //             subdropdownMenu: false
    //         }
    //     ]
    // },
]