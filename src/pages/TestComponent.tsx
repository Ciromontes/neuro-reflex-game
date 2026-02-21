// TestComponent.tsx
import React from 'react';
import { testData } from '../test';

const TestComponent: React.FC = () => {
  return (
    <div>
      <h1>Test Component</h1>
      {testData.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default TestComponent;
