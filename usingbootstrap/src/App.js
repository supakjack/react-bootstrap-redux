import React , { useState} from 'react'

function App() {
  const [data , setData] = useState(0);
  return (
    <div>
      <p>
        ข้อมูลปัจจุบัน : {data}
      </p>

      <button onClick={()=> setData(data+1)}>คลิก</button>
    </div>
  )
}

export default App
