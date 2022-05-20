import { useContext, useState } from 'react';
import { createContext } from 'react';
// import { getEntries } from '../../services/entries';

export const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchEntries = async () => {
  //       const data = await getEntries();
  //       console.log('data', data);
  //       setLoading(false);
  //       setEntries(data);
  //     };
  //     fetchEntries();
  //   }, []);
  //

  return (
    <EntryContext.Provider value={{ entries, setEntries, loading, setLoading }}>
      {children}
    </EntryContext.Provider>
  );
};

const useEntryContext = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error(' useEntry must be used within a EntryProvider');
  }
  return context;
};
export { EntryProvider, useEntryContext };
// //setting feelings context to be able to pass through state

// // setting entry context to useEntry
