import React from 'react';
import Card from '../components/Card.jsx';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card title="About This App">
        <p>
          This React app demonstrates reusable UI components with props and Tailwind CSS styling.
        </p>
      </Card>
    </div>
  );
}
