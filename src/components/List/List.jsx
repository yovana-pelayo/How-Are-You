import { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';
import { getFeelings } from '../../services/feelings';

export default function List() {
  const [feelings, setFeelings] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeels = async () => {
      const data = await getFeelings();
      setLoading(false);
      setFeelings(data);
    };
    fetchFeels();
  });
  return (
    <div className="list">
      <h1>List of Feelings</h1>
      <ul>
        <li>Happy</li>
      </ul>
    </div>
  );
}
