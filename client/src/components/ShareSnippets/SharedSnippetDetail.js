import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

import { shareSnippet } from '../../actions/snippets';
import './SharedStyles.css'

const SharedSnippetDetail = () => {
  
  const { id } = useParams();
  const sharedSnippet = useSelector((state) => state.snippets.sharedSnippet);
  const [highlightedCode, setHighlightedCode] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shareSnippet(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    if (sharedSnippet) {
      const highlighted = hljs.highlightAuto(sharedSnippet.value);
      setHighlightedCode(highlighted.value);
    }
  }, [sharedSnippet]);

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.log('Error copying URL to clipboard:', error);
      });
  };

  return (
    <div className="shared-snippet-detail">
      <h3 className="snippet-title">Here is your Snippet !!</h3>
      {sharedSnippet && (
        <>
        <div className='snippet-st'>
        <h4 className="snippet-subtitle">Copy the url and Share !!</h4>
        <button onClick={handleCopyUrl}>Copy URL</button>
        </div>
          {highlightedCode ? (
            <pre className="snippet-code">
              <code
                className={`language-${sharedSnippet.language}`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              ></code>
            </pre>
          ) : (
            <pre className="snippet-code">{sharedSnippet.value}</pre>
          )}
        </>
      )}
    </div>
  );
};

export default SharedSnippetDetail;
