
import './App.css';
import './flex-slider.css'
import './bootstrap.min.css'
import './font-awesome.css'
import './templatemo-softy-pinko.css'
import { trackPromise } from 'react-promise-tracker';
import {useSelector, useDispatch} from "react-redux"
import {Routes, Route, useNavigate , Router, Link} from "react-router-dom"
import axios from 'axios'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import IdeaContainer from './components/IdeaComponent'
import Homepage from './components/Homepage'
import TBA from './components/ToBeApproved'
import DevHome from './components/DevHome'
function App() {
  const dispatch = useDispatch()
  return (
<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/thinkers/home" element={<Homepage/>}/>
<Route path="/developers/home" element={<DevHome/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/admin/*" element={<TBA/>}/>

</Routes>
</>
  );
}

export default App;
