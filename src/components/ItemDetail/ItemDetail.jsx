export default function ItemDetail({ entry }) {
  return (
    <div>
      <h1>{entry.mood}</h1>
      <p> {entry.why}</p>
      <p>{entry.needs}</p>
    </div>
  );
}
