import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, BarChart3, Users, Clock, AlertTriangle, Brain } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import './LandingPage.css';

const features = [
  { icon: ShieldAlert, title: 'Smart Complaint Engine', desc: 'Report issues easily with AI-assisted categorization.' },
  { icon: Clock, title: 'Real-Time Tracking', desc: 'Track the status of your complaints in real-time.' },
  { icon: Users, title: 'Public Transparency', desc: 'View all public complaints and community upvotes.' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Data-driven insights for better city management.' },
  { icon: AlertTriangle, title: 'Escalation System', desc: 'Automatic escalation for unresolved critical issues.' },
  { icon: Brain, title: 'AI-Powered Detection', desc: 'Identify fake complaints and duplicate reports instantly.' },
];

const LandingPage = () => {
  return (
    <div className="landing-page flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="hero-section text-center p-8 mt-12 bg-pattern">
          <h1 className="font-bold mb-4" style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Smart Nagar 2.0</h1>
          <p className="text-xl mb-8 text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Report civic issues. Track progress. Build a smarter city together.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.125rem' }}>Report Complaint</Link>
            <Link to="/public/complaints" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1.125rem' }}>View Public Complaints</Link>
          </div>
        </section>

        <section className="features-section p-8" style={{ marginTop: 'var(--spacing-8)', padding: '4rem 2rem', backgroundColor: 'var(--color-bg-card)' }}>
          <h2 className="text-center font-bold mb-8" style={{ fontSize: '2rem' }}>Platform Features</h2>
          <div className="grid grid-cols-3 mx-auto" style={{ maxWidth: '1200px', gap: '2rem' }}>
            {features.map((F, i) => (
              <div key={i} className="card text-center flex flex-col items-center">
                <F.icon size={40} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                <h3 className="font-bold mb-2 text-lg">{F.title}</h3>
                <p className="text-muted text-sm">{F.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default LandingPage;
