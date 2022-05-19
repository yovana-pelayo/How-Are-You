import { useEffect, useState } from 'react';
import { getFeelings } from '../../services/feelings';

export default function List() {
  const [entry, setEntry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeels = async () => {
      const data = await getFeelings();
      console.log('data', data);
      setLoading(false);
      setEntry(data);
    };
    fetchFeels();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div>
      <h2>{entry.mood}</h2>
      <p>{entry.why}</p>
      <p>{entry.need}</p>
    </div>
  );
}
