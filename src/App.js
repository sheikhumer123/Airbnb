
import './App.css';
import IndexContentArea from './components/indexContentArea/IndexContentArea';
import TopNav from './components/nav-top/TopNav';


function App() {
  return (
 <>
 <div  className='container-fluid setting' >
<TopNav/>
<div>

<div className='row'>
 {Array(30).fill(<IndexContentArea />)}
 </div>

 </div>

 </div>
 </>
  );
}

export default App;
