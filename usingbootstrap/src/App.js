import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(0);
  const [txt, setTxt] = useState('Supak Jack');
  useEffect(() => {
    console.log({ data });
    console.log({ txt });
  });

  return (
    <div>
      <p>ข้อมูลปัจจุบัน : {data}</p>
      <p>ชื่อปัจจุบัน : {txt}</p>
      <button
        onClick={() => {
          setData(data + 1);
          setTxt('สุภัค แจ๊ค');
        }}
      >
        คลิก
      </button>
    </div>
  );
}

export default App;
