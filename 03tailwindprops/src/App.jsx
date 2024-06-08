import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name:"Rishabh",
    age:21
  }
  let myArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card someObj = {myObj} someArr = {myArr}/> */}
      <Card name="Catherine" btnTxt={'Click Me'}/>
      <Card name="Julie"/>
    </>
  )
}

export default App
