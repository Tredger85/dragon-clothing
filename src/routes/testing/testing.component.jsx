
import {useState} from "react";

const Test = () => {

  const testHeaders = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "hats"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "jackets"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "sneakers"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "womens"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "mens"
    }
  ]

  const [position, setPosition] = useState(0);
  return(
    <div>
      <h1>{testHeaders[position].title.toString()}</h1>
      <p>{testHeaders[position].imageUrl.toString()}</p>
      <button onClick={()=>setPosition(0)} disabled={position===0}>Restart</button>
      <button onClick={()=>setPosition(position-1)} disabled={position===0}>Back</button>
      <button onClick={()=>setPosition(position+1)} disabled={position===testHeaders.length-1}>Next</button>
    </div>
  )
}

export default Test;
