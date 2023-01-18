import './App.css';
import Folder from './components/Folder';
import { folderData } from './data/folderData';

function App() {
  // console.log(folderData);


  
  return (
    <div className="App">
      <Folder data={folderData}/>
    </div>
  );
}

export default App;
