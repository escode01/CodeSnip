import React from 'react';
import { useSelector } from 'react-redux';

import SnippetItem from '../Item/SnippetItem';
import './ListStyles.css'

const SnippetList = ({setCurrentId}) => {
  const snippets = useSelector((state) => state.snippets);
    console.log(snippets);
  return (
    <div className="snippet-list">
      {snippets.map((snippet, index) => (
        <div key={snippet._id} className="snippet-card">
          <SnippetItem snippet={snippet} index={index} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
