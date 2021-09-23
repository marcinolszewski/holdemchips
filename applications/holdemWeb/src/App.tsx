import React from 'react';
import { Holdem } from 'holdem';

export type AppTypes = {
  text?: string;
};

export const App: React.FC<AppTypes> = ({ text }) => (
  <div>
    {text}
    <Holdem />
  </div>
);
