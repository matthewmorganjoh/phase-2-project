export default function Monsters({ data }) {
    return (
      <div>
        <p>Monsters</p>
        {data && data.length > 0 ? data.map((monster, i) => (
          <p key={i}>{monster.name}</p>
        )) : <p>No monsters found</p>}
      </div>
    );
  }
  