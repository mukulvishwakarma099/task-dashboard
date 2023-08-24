import OptionBar from "./components/OptionBar";
import SideNav from "./components/SideNav";
import TaskBoard from "./components/TaskBoard";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="app flex  flex-row">
        <SideNav />
        <div className="w-full">
          <Title />
          <OptionBar />
          <TaskBoard />
        </div>
      </div>
    </>
  );
}

export default App;
