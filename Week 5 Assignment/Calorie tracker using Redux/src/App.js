import AddEntry from "./components/AddEntry";
import Entries from "./components/Entries";
import TotalCalories from "./components/TotalCalories";

 const App = ()=> {
  return (
    <div className="container">
      <TotalCalories />
      <AddEntry />
      <Entries />
    </div>
  );
}
export default App