export default function ItemDetail() {
  return (
    <div>
      <ul>
        {item.map((object) => (
          <li key={object.id}>{object.mood}</li>
        ))}
        <p>{object.why}</p>
        <p>{object.need}</p>
      </ul>
    </div>
  );
}
