import { Link } from 'react-router-dom';

const MeetingCard = () => (
  <Link to="/meeting/1" className="block bg-white shadow rounded-xl p-6 hover:shadow-md">
    <h3 className="text-xl font-semibold mb-2">Team Sync - Aug 5</h3>
    <p className="text-gray-600">Discussed project roadmap and assigned action items...</p>
  </Link>
);
export default MeetingCard;
