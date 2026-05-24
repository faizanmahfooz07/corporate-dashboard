import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppSelector } from './store/hooks';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './pages/Overview';
import Employees from './pages/Employees';
import Tasks from './pages/Tasks';
import Announcements from './pages/Announcements';
import Settings from './pages/Settings';

const pageMap: Record<string, React.ReactNode> = {
  overview: <Overview />,
  employees: <Employees />,
  tasks: <Tasks />,
  announcements: <Announcements />,
  settings: <Settings />,
};

const DashboardLayout: React.FC = () => {
  const { activeTab } = useAppSelector(s => s.dashboard);
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f8fafc', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {pageMap[activeTab]}
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <DashboardLayout />
  </Provider>
);

export default App;
