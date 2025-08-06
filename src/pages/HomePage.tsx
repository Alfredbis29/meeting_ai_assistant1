import Hero from '../components/layout/Hero';
import FeatureCard from '../components/features/FeatureCard';

const features = [
  { icon: '📝', title: 'Transcriptions', description: 'Instant meeting notes.' },
  { icon: '📄', title: 'Summaries', description: 'AI-generated meeting summaries.' },
  { icon: '✅', title: 'Action Items', description: 'Track your tasks automatically.' },
];

const HomePage = () => (
  <div>
    <Hero />
    <section className="py-12 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => <FeatureCard key={i} {...f} />)}
    </section>
  </div>
);
export default HomePage;
