import {Router,BrowserRouter,Routes,Route} from 'react-router-dom';
import '@xyflow/react/dist/style.css';
import CreateWorkFlow from './components/CreateWorkFlow';
import TriggerSheet from './components/TriggerSheet';

export default function App(){
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/create-workflow" element={<CreateWorkFlow/>} />
        <Route path="/triggerSheet" element={<TriggerSheet/>}
      </Routes>
    </BrowserRouter>
  </div>
}