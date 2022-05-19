import { useEffect, useState } from 'react';
import { getFeelings } from '../../services/feelings';

export default function ListDetail() {
  const [entry, setEntry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeels = async () => {
      const data = await getFeelings();
      setLoading(false);
      setEntry(data);
    };
    fetchFeels();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div className="list">
      <h1>List of Feelings</h1>
      <ul>
        <li key={entry.id}>{entry.mood}</li>
        <li>{entry.why}</li>
        <li>{entry.needs}</li>
      </ul>
    </div>
  );
}

// fetching data from supa base by calling the fetchFeels function
//
