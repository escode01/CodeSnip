import React from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios';

import { editSnippet, deleteSnippet } from '../../actions/snippets';
import './ItemStyles.css'


const SnippetItem = ({ snippet, index, setCurrentId }) => {

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const handleShare = async() => {
    //dispatch(shareSnippet(snippet));
    try {
      const response = await axios.get(`/snippets/${snippet._id}/share`);
      const shareUrl = response.data.shareUrl;
      console.log(shareUrl); // Log the share URL
      // You can now use the shareUrl as needed, e.g., display it to the user or copy it to the clipboard
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="snippet-item">
      <h3 className="snippet-title">Snippet {index + 1}</h3> 
      <pre className="snippet-value">{snippet.value}</pre>
      <div className='snippet-actions'>
        <button onClick={() => setCurrentId(snippet._id)}>Edit</button>
        <button onClick= {() => dispatch(deleteSnippet(snippet._id))}>Delete</button>
        
        
      </div>
    </div>
  );
};

export default SnippetItem;
