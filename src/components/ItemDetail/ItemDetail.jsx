export default function ItemDetail({ entry }) {
  return (
    <div>
      <p>{entry.mood}</p>
      <p>{entry.why}</p>
      <p>{entry.needs}</p>
    </div>
  );
}
