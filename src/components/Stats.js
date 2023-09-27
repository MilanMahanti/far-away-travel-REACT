export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>
          Start adding items now and never left anything behind for your trips
          🎉
        </em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const perecntage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {perecntage === 100
          ? "You packed everything you need all set to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${perecntage}%)`}
      </em>
    </footer>
  );
}
