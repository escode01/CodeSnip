import * as api from '../api'

// Action Creators
export const getSnippets = () => async (dispatch) => {
    try {
        const {data} = await api.fetchSnippets();
        dispatch({type : 'FETCH_ALL' , payload : data});
    } catch (error) {
        console.log(error)
    }
}
export const createSnippet = (snippet) => async (dispatch) => {
    try {
        
        const {data} = await api.createSnippet(snippet);
        
        dispatch({type: 'CREATE', payload: data});
        
    } catch (error) {
        console.log(error);
    }
}

export const editSnippet = (id, editedSnippet) => async (dispatch) => {
    try {
        const { data } = await api.editSnippet(id, editedSnippet)
        dispatch( { type : 'EDIT', payload : data})
    } catch (error) {
        console.log(error) 
    }
}

export const deleteSnippet = (id) => async (dispatch) => {
    try {
        await api.deleteSnippet(id);

        dispatch({ type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}
  
export const shareSnippet = (id) => async (dispatch) => {
    try {
      const { data } = await api.shareSnippet(id);
      dispatch({ type: 'SHARE', payload: { id, snippet: data } });
    } catch (error) {
      console.log(error);
    }
  };