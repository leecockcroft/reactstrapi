
import './App.css';
import useFetch from './hooks/usefetch'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
function App() {

let {loading,data,error} = useFetch('http://localhost:1337/api/blogs?populate=*')
if(loading){
  return <p> loading </p>
}
if(error)return <p>error</p>
console.log(data)

  return (
    <div className="App">
    <Navbar blog={data}/>
      <header className="App-header">
<h3 className='text-3xl font-bold underline'>tt</h3>
      </header>
    </div>
  );
}

export default App;
