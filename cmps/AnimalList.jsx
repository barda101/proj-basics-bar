export function AnimalList( {animalInfos} ) {
  //return <h1>Bar</h1>
  return (
    <div className="animal-table-wrapper">
      <h2>Rare Animals</h2>
      <table className="animal-table">
        {animalInfos.map((animalInfos, idx) => (
          <tr key={idx}>
            <td>{animalInfos.type}</td>
            <td>{animalInfos.count}</td>
            <td>
              <a href={`https://www.google.com/search?q=${animalInfos.type}`}>Search</a>
            </td>
          </tr>
        ))
      }
      </table>
    </div>
    )
}