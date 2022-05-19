import { useEffect, useState } from 'react';
import { getFeelings } from '../../services/feelings';

export default function List() {
  const [feelings, setFeelings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeels = async () => {
      const data = await getFeelings();
      setLoading(false);
      setFeelings(data);
    };
    fetchFeels();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div className="list">
      <h1>List of Feelings</h1>
      <ul>
        {feelings.map((object) => (
          <li key={object.id}>{object.mood}</li>
        ))}
      </ul>
    </div>
  );
}
