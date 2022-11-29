import "./App.css";
import IndexContentArea from "./components/indexContentArea/IndexContentArea";
import TopNav from "./components/nav-top/TopNav";
import Hotelinfo from "./pages/HotelInfo/Hotelinfo";
import LoginSignup from "./pages/login/LoginSignup";

function App() {
  return (
    <>
      {/* <div className="container-fluid setting">
        <TopNav />
        <div>
          <div className="row">
            {Array.from(Array(30).keys()).map((i, k) => (
              <IndexContentArea key={k} />
            ))}
          </div>
        </div>
      </div> */}
      {/* <LoginSignup/> */}
      <Hotelinfo />
    </>
  );
}

export default App;
