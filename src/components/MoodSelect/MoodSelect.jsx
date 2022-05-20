import { useEffect } from 'react';
import { useEntryContext } from '../../context/EntryContext/EntryContext';
import { getMoods } from '../../services/entries';

export default function MoodDropdown({ onChange }) {
  const { moods, setMoods } = useEntryContext();
  useEffect(() => {
    const fetchMoods = async () => {
      const data = await getMoods();
      setMoods(data);
      console.log('data', data);
    };

    fetchMoods();
  }, []);
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <form>
        <select onChange={handleChange}>
          {moods.map((moods) => (
            <option value={moods.id}>{moods.feeling}</option>
          ))}
        </select>
      </form>
    </>
  );
}
