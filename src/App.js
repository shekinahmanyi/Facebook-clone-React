import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      { /* Header Component */}
      <Header />
      { /* App body */}
     <div className="app_body">
     { /* Sidebar */}
     <Sidebar />
     </div>
     { /* Feed */}
     <Feed />
    </div>
  );
}

export default App;
