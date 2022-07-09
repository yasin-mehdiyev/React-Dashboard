import React, { Fragment, Suspense, lazy, useLayoutEffect, useState } from 'react'
import Sidebar from './components/Layout/Sidebar';

// CSS File
import './App.css';

// Redux, Actions
import { useDispatch } from 'react-redux';
import { fetchUsersData } from './redux/features/User/UserAction';
import { fetchGatewaysData } from './redux/features/Gateway/GatewayAction';
import { fetchProjectsData } from './redux/features/Project/ProjectAction';

// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Loader from './components/Skeleton/Loader';

// React Routing Dom Library
import { Route, Routes } from "react-router-dom";
import DashboardPage from './pages/Dashboard/Home';

// Dynamic İmports(Code Splittings)
const UserPage = lazy(() => import("./pages/User/User"));
const AnalyticPage = lazy(() => import("./pages/Analytics/Analytics"));
const ReportPage = lazy(() => import("./pages/Reports/Reports"));
const LogoutPage = lazy(() => import("./pages/Logout/Logout"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {

  const dispatch = useDispatch<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchUsersData());
      dispatch(fetchGatewaysData());
      dispatch(fetchProjectsData());
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <Fragment>
      {
        loading ? (
          <Loader />
        ) : (
          <Sidebar>
            <Header />
            <div className="content">
              <Suspense fallback={<>{loading ? <Loader /> : null}</>}>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/analytics" element={<AnalyticPage />} />
                  <Route path="/reports" element={<ReportPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </div>

            <Footer />
          </Sidebar>
        )
      }
    </Fragment>
  )
}

export default App;