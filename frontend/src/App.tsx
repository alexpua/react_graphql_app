import "./App.css";
import AddButton from "./components/AddButton.tsx";
import UserCards from "./components/UserCards.tsx";

function App() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <AddButton />
      <UserCards />
    </div>
  );
}

export default App;
