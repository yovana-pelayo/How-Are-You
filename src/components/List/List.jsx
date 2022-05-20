import { useEffect, useState } from 'react';
import { getFeelings } from '../../services/feelings';
import ItemDetail from '../ItemDetail/ItemDetail';

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
        <li>
          <ItemDetail />
        </li>
      </ul>
    </div>
  );
}

// fetching data from supa base by calling the fetchFeels function
//
const [item, setItem] = useState({});
const [loading, setLoading] = useState(true);
