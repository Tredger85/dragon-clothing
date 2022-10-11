
import React, {useState, useEffect} from "react";
import ProductItem from "../../components/product-item/product-item.component";

const Test3 = () => {

  const[test, setTest] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((obj) => setTest(obj.products));
    console.log('fetched');
  },[])

  function onSort(type) {
    const sorted = [...test].sort((a, b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0))
    setTest(sorted)
  }

  return(
    <div className='products'>
      {test.map(product =>
        <ProductItem product = {product}></ProductItem>
      )}
      <button onClick={()=> onSort('title')}>Title</button>
      <button onClick={()=> onSort('price')}>Price</button>
    </div>
  )
}

export default Test3;
