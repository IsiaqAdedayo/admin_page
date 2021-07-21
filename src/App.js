import Menu from "./components/Menu";
import Overview from "./components/Overview";
import UserDetails from "./components/UserDetails";

const App = () => {
  return(
    <div className="md:grid md:grid-cols-7 h-screen p-4 overflow-x-hidden">
        <Menu />
        <Overview />
        <UserDetails />
    </div>
  )
}

export default App;
