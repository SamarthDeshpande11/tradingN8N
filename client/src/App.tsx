import {Router,BrowserRouter,Routes,Route} from 'react-router-dom';
import '@xyflow/react/dist/style.css';
import CreateWorkFlow from './component/CreateWorkFlow';


export default function App(){
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/create-workflow" element={<CreateWorkFlow/>} />
        <Route path="*" element={<div>Home Page</div>} />
      </Routes>
    </BrowserRouter>
  </div>
}