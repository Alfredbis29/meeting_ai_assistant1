import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import MeetingDetailPage from './pages/MeetingDetailPage';
import SettingsPage from './pages/SettingsPage';

const App = () => (
  <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/meeting/:id" element={<MeetingDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
