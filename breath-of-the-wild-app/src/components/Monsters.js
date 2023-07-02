export default function Monsters({ data }) {
    return (
      <div>
        <p>Monsters</p>
        {data && data.length > 0 ? data.map((monster, i) => {
          const monsterName = Object.values(monster.entries)[0].name;
          return <p key={i}>{monsterName}</p>;
        }) : <p>No monsters found</p>}
      </div>
    );
  }
  