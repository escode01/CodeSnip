const initialState = {
    snippets: [],
    sharedSnippet: null, 
  };
  
export default (snippets = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...snippets, action.payload]
        case 'EDIT':
            return snippets.map((snippet) => snippet._id === action.payload._id ? action.payload : snippet);
        case 'DELETE':
            return snippets.filter((snippet) => snippet._id !== action.payload);
        case 'SHARE':
            return { ...snippets, sharedSnippet: action.payload.snippet };
        default:
            return snippets;
    }
}