export default function ItemDetail({}) {
  return (
    <div>
      <h1>{entry.id}</h1>

      <p>{entry.mood}</p>
      <p>{entry.why}</p>
      <p>{entry.needs}</p>
    </div>
  );
}
