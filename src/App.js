
import './App.css';
import IndexContentArea from './components/indexContentArea/IndexContentArea';
import TopNav from './components/nav-top/TopNav';
import LoginSignup from './pages/login/LoginSignup';


function App() {
  return (
 <>
 {/* <div  className='container-fluid setting' >
<TopNav/>
<div>

<div className='row'>
 {Array(30).fill(<IndexContentArea />)}
 </div>

 </div>

 </div> */}
 <LoginSignup/>
 </>
  );
}

export default App;
