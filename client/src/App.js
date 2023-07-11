import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import SnippetForm from './components/Form/SnippetForm';
import SnippetList from './components/List/SnippetList'
import SharedSnippetDetail from './components/ShareSnippets/SharedSnippetDetail';
import { getSnippets } from './actions/snippets';

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect ( () => {
      dispatch(getSnippets());
    }, [dispatch])
    return (
<Router>      
<div className="app">
  <h1 className="app-title">CodeSnip - Share your Code Snippets :) </h1>
    <div className="app-content">
      <div className="card">
         <div className="card-body">
            <Routes>
            <Route path="/snippets/" element={<><SnippetForm currentId = {currentId} setCurrentId = {setCurrentId}/><SnippetList setCurrentId={setCurrentId}/></>} />
               
            <Route path={`/snippets/:id/share`} element={<SharedSnippetDetail currentId = {currentId}/>} />
            </Routes>
         </div>
       </div>
     </div>
</div>
</Router>    
    )
}
export default App;
