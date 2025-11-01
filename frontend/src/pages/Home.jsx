// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import TaskManager from '../components/TaskManager.jsx';


export default function Home() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Hero Card */}
      <Card title="Welcome to Nomize's React App">
        
          This homepage demonstrates reusable components with props, variants,
          and responsive styling.
        
      </Card>



      {/* Task Manager */}
      <Card title="Your Tasks">
        <TaskManager />
      </Card>
    </div>
  );
}
