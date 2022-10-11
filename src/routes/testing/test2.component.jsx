
import React, {useState} from "react";

const Test2 = ({testData}) => {

  const[test, setTest] = useState(testData)

  function onSort(type) {
    const sorted = [...test].sort((a, b) => (a[type] > b[type]) ? -1 : ((b[type] > a[type]) ? 1 : 0))
    setTest(sorted)
  }

  return(
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Votes</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {test.map(data => (
          <tr key = {data.id}>
            <td>{data.id}</td>
            <td>{data.votes}</td>
            <td>{data.date}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <button onClick={()=> onSort('votes')}>Votes</button>
      <button onClick={()=> onSort('date')}>Date</button>
      {/*<h1>{testHeaders[position].title.toString()}</h1>*/}
      {/*<p>{testHeaders[position].imageUrl.toString()}</p>*/}

    </div>
    //<div><h1>Testing area</h1></div>
  )
}

export default Test2;
