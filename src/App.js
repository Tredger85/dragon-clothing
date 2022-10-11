import {Routes, Route} from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Test from "./routes/testing/testing.component";
import Test2 from "./routes/testing/test2.component";
import Test3 from "./routes/testing/test3.component";
import SignIn from "./routes/sign-in/sign-in.component";


const App = () => {

  const testData = [
    {
      "id": 5,
      "votes": 30,
      "date": "2019-01-24"
    },
    {
      "id": 2,
      "votes": 31,
      "date": "2021-10-24"
    },
    {
      "id": 3,
      "votes": 1,
      "date": "2019-02-24"
    },
    {
      "id": 4,
      "votes": 1000,
      "date": "2019-01-26"
    },
    {
      "id": 1,
      "votes": 55,
      "date": "2020-01-24"
    }
  ]

  return (
    <Routes>
      <Route path = '/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path = '/test' element={<Test/>}/>
        <Route path = '/test2' element={<Test2 testData = {testData}/>}/>
        <Route path = '/test3' element={<Test3/>}/>
        <Route path = '/sign-in' element={<SignIn/>}/>
      </Route>

    </Routes>
  );
}

export default App;
