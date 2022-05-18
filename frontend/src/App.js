import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Dashboard from "./Pages/Dashboard";
import quiz from "./Pages/Games/quiz";
import reasoning from "./Pages/Games/reasoning";
import tictac from "./Pages/Games/tictac";
import memory from "./Pages/Games/memory";
import wordle from "./Pages/Games/wordle";
import derby from "./Pages/Games/derby";
import chess from "./Pages/Games/chess";
import Cpage from "./Video/Cpage"
import VideoStream from "./Video/VideoStream"

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
       <Route path="/chats" component={Chatpage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/quiz" component={quiz} />
        <Route path="/reasoning" component={reasoning} />
        <Route path="/tictac" component={tictac} />
        <Route path="/wordle" component={wordle} />
        <Route path="/memory" component={memory} />
        <Route path="/derby" component={derby} />
        <Route path="/chess" component={chess} />
        <Route path="/vchat" component={Cpage} /> 
       <Route path="/vstream" component={VideoStream} /> 
       

     
        
    </div>
  );
}

export default App;