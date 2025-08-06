import TranscriptionPanel from '../components/meeting/TranscriptionPanel';
import SummaryBlock from '../components/meeting/SummaryBlock';
import ActionItemsList from '../components/meeting/ActionItemsList';

const MeetingDetailPage = () => (
  <div className="space-y-8">
    <TranscriptionPanel />
    <SummaryBlock />
    <ActionItemsList />
  </div>
);
export default MeetingDetailPage;
