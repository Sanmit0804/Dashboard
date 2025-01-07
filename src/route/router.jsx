// router.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Analytics from "../pages/analytics";
import ReportsSales from "../pages/reports-sales";
import ReportsLeads from "../pages/reports-leads";
import ReportsProject from "../pages/reports-project";
import AppsChat from "../pages/apps-chat";
import LayoutApplications from "../layout/layoutApplications";
import AppsEmail from "../pages/apps-email";
import ReportsTimesheets from "../pages/reports-timesheets";
import LoginCover from "../pages/login-cover";
import AppsTasks from "../pages/apps-tasks";
import AppsNotes from "../pages/apps-notes";
import AppsCalender from "../pages/apps-calender";
import AppsStorage from "../pages/apps-storage";
import Proposalist from "../pages/proposal-list";
import CustomersList from "../pages/customers-list";
import ProposalView from "../pages/proposal-view";
import ProposalEdit from "../pages/proposal-edit";
import LeadsList from "../pages/leadsList";
import CustomersView from "../pages/customers-view";
import CustomersCreate from "../pages/customers-create";
import ProposalCreate from "../pages/proposal-create";
import LeadsView from "../pages/leads-view";
import LeadsCreate from "../pages/leads-create";
import PaymentList from "../pages/payment-list";
import PaymentView from "../pages/payment-view/";
import PaymentCreate from "../pages/payment-create";
import ProjectsList from "../pages/projects-list";
import ProjectsView from "../pages/projects-view";
import ProjectsCreate from "../pages/projects-create";
import SettingsGaneral from "../pages/settings-ganeral";
import LayoutSetting from "../layout/layoutSetting";
import SettingsSeo from "../pages/settings-seo";
import SettingsTags from "../pages/settings-tags";
import SettingsEmail from "../pages/settings-email";
import SettingsTasks from "../pages/settings-tasks";
import SettingsLeads from "../pages/settings-leads";
import SettingsMiscellaneous from "../pages/settings-miscellaneous";
import SettingsRecaptcha from "../pages/settings-recaptcha";
import SettingsLocalization from "../pages/settings-localization";
import SettingsCustomers from "../pages/settings-customers";
import SettingsGateways from "../pages/settings-gateways";
import SettingsFinance from "../pages/settings-finance";
import SettingsSupport from "../pages/settings-support";
import LayoutAuth from "../layout/layoutAuth";
import LoginMinimal from "../pages/login-minimal";
import LoginCreative from "../pages/login-creative";
import RegisterCover from "../pages/register-cover";
import RegisterMinimal from "../pages/register-minimal";
import RegisterCreative from "../pages/register-creative";
import ResetCover from "../pages/reset-cover";
import ResetMinimal from "../pages/reset-minimal";
import ResetCreative from "../pages/reset-creative";
import ErrorCover from "../pages/error-cover";
import ErrorCreative from "../pages/error-creative";
import ErrorMinimal from "../pages/error-minimal";
import OtpCover from "../pages/otp-cover";
import OtpMinimal from "../pages/otp-minimal";
import OtpCreative from "../pages/otp-creative";
import MaintenanceCover from "../pages/maintenance-cover";
import MaintenanceMinimal from "../pages/maintenance-minimal";
import MaintenanceCreative from "../pages/maintenance-creative";
import HelpKnowledgebase from "../pages/help-knowledgebase";
import WidgetsLists from "../pages/widgets-lists";
import WidgetsTables from "../pages/widgets-tables";
import WidgetsCharts from "../pages/widgets-charts";
import WidgetsStatistics from "../pages/widgets-statistics";
import WidgetsMiscellaneous from "../pages/widgets-miscellaneous";
import ProtectedRoute from '../components/ProtectedRoute'
import RecruitmentMetrics from '../../src/pages/recruitment-metrics';
import CandidateAnalysis from '../../src/pages/CandidateAnalysis';
import CandidateExperienceMatrics from "../../src/pages/CandidateExperienceMatrics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/dashboards/analytics",
                element: (
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/reports/sales",
                element: (
                    <ProtectedRoute>
                        <ReportsSales />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/reports/leads",
                element: (
                    <ProtectedRoute>
                        <ReportsLeads />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/reports/project",
                element: (
                    <ProtectedRoute>
                        <ReportsProject />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/reports/timesheets",
                element: (
                    <ProtectedRoute>
                        <ReportsTimesheets />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/corporate-recruitment/recruitment-metrics",
                element: (
                    <ProtectedRoute>
                        <RecruitmentMetrics />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/corporate-recruitment/candidate-analytics",
                element: (
                    <ProtectedRoute>
                        <CandidateAnalysis />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/corporate-recruitment/candidate-experience-matrics",
                element: (
                    <ProtectedRoute>
                        <CandidateExperienceMatrics />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/corporate-recruitment/hiring-trends",
                element: (
                    <ProtectedRoute>
                        <ProposalCreate />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/payment/list",
                element: (
                    <ProtectedRoute>
                        <PaymentList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/payment/view",
                element: (
                    <ProtectedRoute>
                        <PaymentView />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/payment/create",
                element: (
                    <ProtectedRoute>
                        <PaymentCreate />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/customers/list",
                element: (
                    <ProtectedRoute>
                        <CustomersList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/customers/view",
                element: (
                    <ProtectedRoute>
                        <CustomersView />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/customers/create",
                element: (
                    <ProtectedRoute>
                        <CustomersCreate />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/leads/list",
                element: (
                    <ProtectedRoute>
                        <LeadsList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/leads/view",
                element: (
                    <ProtectedRoute>
                        <LeadsView />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/leads/create",
                element: (
                    <ProtectedRoute>
                        <LeadsCreate />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/projects/list",
                element: (
                    <ProtectedRoute>
                        <ProjectsList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/projects/view",
                element: (
                    <ProtectedRoute>
                        <ProjectsView />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/projects/create",
                element: (
                    <ProtectedRoute>
                        <ProjectsCreate />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/widgets/lists",
                element: (
                    <ProtectedRoute>
                        <WidgetsLists />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/widgets/tables",
                element: (
                    <ProtectedRoute>
                        <WidgetsTables />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/widgets/charts",
                element: (
                    <ProtectedRoute>
                        <WidgetsCharts />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/widgets/statistics",
                element: (
                    <ProtectedRoute>
                        <WidgetsStatistics />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/widgets/miscellaneous",
                element: (
                    <ProtectedRoute>
                        <WidgetsMiscellaneous />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/help/knowledgebase",
                element: (
                    <ProtectedRoute>
                        <HelpKnowledgebase />
                    </ProtectedRoute>
                ),
            },
        ]
    },
    {
        path: "/authentication/login/cover",
        element: <LoginCover />,
    },
    // Authentication routes
    {
        path: "/authentication/login/minimal",
        element: <LoginMinimal />,
    },
    {
        path: "/authentication/login/creative",
        element: <LoginCreative />,
    },
    {
        path: "/authentication/register/cover",
        element: <RegisterCover />,
    },
    {
        path: "/authentication/register/minimal",
        element: <RegisterMinimal />,
    },
    {
        path: "/authentication/register/creative",
        element: <RegisterCreative />,
    },
    {
        path: "/authentication/reset/cover",
        element: <ResetCover />,
    },
    {
        path: "/authentication/reset/minimal",
        element: <ResetMinimal />,
    },
    {
        path: "/authentication/reset/creative",
        element: <ResetCreative />,
    },
    {
        path: "/authentication/404/cover",
        element: <ErrorCover />,
    },
    {
        path: "/authentication/404/minimal",
        element: <ErrorMinimal />,
    },
    {
        path: "/authentication/404/creative",
        element: <ErrorCreative />,
    },
    {
        path: "/authentication/verify/cover",
        element: <OtpCover />,
    },
    {
        path: "/authentication/verify/minimal",
        element: <OtpMinimal />,
    },
    {
        path: "/authentication/verify/creative",
        element: <OtpCreative />,
    },
    {
        path: "/authentication/maintenance/cover",
        element: <MaintenanceCover />,
    },
    {
        path: "/authentication/maintenance/minimal",
        element: <MaintenanceMinimal />,
    },
    {
        path: "/authentication/maintenance/creative",
        element: <MaintenanceCreative />,
    },
]);
