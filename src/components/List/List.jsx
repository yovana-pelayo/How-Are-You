import { useEffect } from 'react';
import { useEntryContext } from '../../context/EntryContext/EntryContext';
import { getEntries } from '../../services/entries';

export default function List() {
  const { entries, setEntries, setLoading, loading } = useEntryContext();

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getEntries();
      console.log('data', data);
      setLoading(false);
      setEntries(data);
    };
    fetchEntries;
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div className="list">
      {entries.map((entry) => (
        <p key={entry.id}></p>
      ))}
    </div>
  );
}

// fetching data from supa base by calling the fetchFeels function
