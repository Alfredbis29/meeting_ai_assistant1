import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white h-screen p-4">
    <h2 className="text-2xl font-bold mb-8">Meeting AI</h2>
    <nav className="space-y-4">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  </aside>
);

export default Sidebar;
