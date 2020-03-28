import React, { useState } from 'react';

function App() {
  const iniData = 0;
  const [data, setData] = useState(iniData);
  return (
    <div>
      <p>ข้อมูลปัจจุบัน : {data}</p>
      <button onClick={() => setData(data+1)}>เพิ่มค่า</button>
      <button onClick={() => setData(data-1)}>ลดค่า</button>
      <button onClick={() => setData(iniData)}>ล้างค่า</button>
    </div>
  );
}

export default App;
