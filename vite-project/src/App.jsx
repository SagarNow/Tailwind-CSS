import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<h1 className='text-yellow-400 bg-violet-400'> Radhe Radhe ♥️ </h1>
  <hr />
<h1 className='opacity-50'> opacity is 50 </h1>
<h1 className='opacity-20'> opacity is 20 </h1>
<hr />

<h1 className='underline'> underline </h1>
<h1 className='line-through'> line-through </h1>
<h1 className='no-underline'> no-underline </h1>
<hr />
<form>
  <input type="checkbox" name=" checkbox" id="pink"  className='accent-pink-500'/> <label htmlFor="pink"> accent is pink 500 </label> <br />
  <input type="checkbox" name=" checkbox" id="green" className='accent-green-500'/><label htmlFor="green"> accent is green 500 </label>
</form>
<hr />
 
<div className='bg-green-500 opacity-50 h-100 w-100 p-25'> <div className='bg-red-400 h-50 w-50 ' >
  hare krishna </div>
   
  </div>

<div className=' font-black bg-amber-300'> <h1 className=' p-5 ml-140'>font checkk </h1></div>
<hr />






    </>
  )
}

export default App
