import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  function addData() {
    setData([
      ...data,
      {
        value: Math.random()
      }
    ]);
  }

  return (
    <div>
      <button onClick={addData}>เพิ่มข้อมูล</button>
      <ul>
        {data.map((item,index) => (
          <li key={index} >{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
