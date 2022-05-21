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
    <form>
      <select onChange={handleChange}>
        {moods.map((mood) => (
          <option key={mood.id} value={mood.id}>
            {mood.feeling}
          </option>
        ))}
      </select>
    </form>
  );
}
