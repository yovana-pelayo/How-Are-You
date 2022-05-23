import { useContext, useState } from 'react';
import { createContext } from 'react';
// import { getEntries } from '../../services/entries';

export const EntryContext = createContext();

function reducer(entries, { type, payload }) {
  switch (type) {
    case 'create':
      return [payload, ...entries];
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moods, setMoods] = useState([]);
  const [needs, setNeeds] = useState([]);
  // const [state, dispatch] = useReducer(reducer);
  return (
    <EntryContext.Provider
      value={{
        entries,
        setEntries,
        loading,
        setLoading,
        moods,
        setMoods,
        needs,
        setNeeds,
      }}
    >
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

//     const fetchEntries = async () => {
//       const data = await getEntries();
//       console.log('data', data);
//       setLoading(false);
//       setEntries(data);
//     };
//     fetchEntries();
//   }, []);
//
