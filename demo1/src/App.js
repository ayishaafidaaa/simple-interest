
import { useState } from 'react';
import './App.css';
import Random from './components/Random';
import User from './components/User';


function App() {

// state creation 

  const[username,setUsername]=useState()

  console.log(username);

  // const getUserName=(e)=>{
  //   setUsername(e.target.value)
  //   console.log(username);
  // }

  const handleAdd=()=>{
    if(username){
      alert(username)
    }
    else{
      alert('please fill the input')
    }
  }

  let userDetials=[
    {uname:"fida",age:21,desig:"developer"},
    {uname:"nafi",age:22,desig:"doctor"},
    {uname:"fida fa",age:24,desig:"enginer"},
    {uname:"nihala",age:25,desig:"design"}
    
  ]

// js code
  return (


<>

     {/* emty fragment */}

    <div  className="App container m-5">

     

   <div className='d-flex justify-content-center align-item-center'>

   <input onChange={e=>setUsername(e.target.value)} type='text'className='form-control w-50 'placeholder='enter your name'/>

    <button onClick={handleAdd} className='btn btn-primary ms-3'>Add</button>

   </div>

      {/* jsx code */}
      <User userkey ={username}/>
   <Random/>

    

<h2 className='text-center'>userDetials</h2>

<div className='container'>

  <table className='table-shadow'>

    <thead>

      <tr>

        <td>ID</td>
        <td>UNAME</td>
        <td>AGE</td>
        <td>DESIG</td>

      </tr>

    </thead>


    <tbody>
      
      {
      userDetials.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.desig}</td>
        </tr>

      ))
}
    </tbody>

  </table>

</div>


    </div>
</> 

  );
}

export default App;
