import { useEffect } from 'react';
import { useEntryContext } from '../../context/EntryContext/EntryContext';
import { getNeeds } from '../../services/entries';

export default function NeedsDropdown({ onChange }) {
  const { needs, setNeeds } = useEntryContext();
  useEffect(() => {
    const fetchNeeds = async () => {
      const data = await getNeeds();
      setNeeds(data);
      console.log('data', data);
    };

    fetchNeeds();
  }, []);
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <form>
        <select onChange={handleChange}>
          {needs.map((need) => (
            <option key={need.id} value={need.id}>
              {need.needs}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
