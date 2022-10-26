import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

// function Test(props) {
//   return(
//     <div>
//       <h2>yoyoyoyoyoyo {props.information}</h2>
//       <button onClick={props.coolFunction}>press</button>
//     </div>
//   )
// }

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  // return (
  //   <div>
  //     <h1>hello: {count}</h1>
  //     <Test information={"component"} coolFunction={handleClick}/>
  //   </div>
  // )
}

export default App;