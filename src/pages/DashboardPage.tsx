import MeetingCard from '../components/meeting/MeetingCard';

const DashboardPage = () => (
  <div>
    <h2 className="text-3xl font-semibold mb-6">Recent Meetings</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map(id => <MeetingCard key={id} />)}
    </div>
  </div>
);
export default DashboardPage;
