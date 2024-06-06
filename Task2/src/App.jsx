
import { useState } from 'react'
import './App.css'
import Form1 from './components/Form1';
function App() {
  const [status,setStatus]= useState('');

  return (
    <>
    
    <button type="button" onClick={()=>setStatus('create')} className='button'>Create</button>
    <div>
    {status==='create' ? <Form1 /> : null}
    </div>
          
    </>
  )
}

export default App
