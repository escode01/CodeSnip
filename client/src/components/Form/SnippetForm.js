import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import autosize from 'autosize';

import { createSnippet, editSnippet } from "../../actions/snippets.js"
import './FormStyles.css'

const SnippetForm = ({ currentId, setCurrentId }) => {
    const [value, setValue] = useState("");

    const snippet = useSelector((state) => currentId ? state.snippets.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (snippet) setValue(snippet.value);
        autosize(document.querySelector('textarea'));
    }, [snippet]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentId) {
            dispatch(editSnippet(currentId, { value }));
           
        }
        else {
            dispatch(createSnippet({ value }));
        }
        clear();
        
    }
    const clear = () => {
        setCurrentId(null);
        setValue("");
    }
    return (
        <form className='snippet-form' onSubmit={handleSubmit}>
            <textarea
                placeholder='Enter the code&#10;Note : Snippet can be shared only after saving'

                value={value}
                autoFocus
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="button-container">
                <button type='submit' className='submit-btn'>Save</button>
                
                <Link to={`/snippets/${currentId}/share`} className='share-link'>SHARE</Link>

            </div>
        </form>


    );
}
export default SnippetForm;