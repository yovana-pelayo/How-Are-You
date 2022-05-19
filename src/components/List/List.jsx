import { useEffect, useState } from 'react';
import { getFeelings } from '../../services/feelings';
import EntryDetail from '../EntryDetail/EntryDetail';

export default function List() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeels = async () => {
      const data = await getFeelings();
      console.log('data', data);
      setLoading(false);
      setEntries(data);
    };
    fetchFeels();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div className="list">
      <h1>List of Feelings</h1>
      <ul>
        {entries.map((entry) => (
          <EntryDetail key={entry.id} />
        ))}
      </ul>
    </div>
  );
}

// fetching data from supa base by calling the fetchFeels function
//
