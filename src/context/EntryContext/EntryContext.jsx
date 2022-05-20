import { useState } from 'react';
import { createContext } from 'react';

export const EntryContext = createContext();

export const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState({});
  return (
    <FeelingContext.Provider value={{ entries, setEntries }}>
      {children}
    </FeelingContext.Provider>
  );
};

//setting feelings context to be able to pass through state
