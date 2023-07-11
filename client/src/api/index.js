import axios from 'axios';

const url = 'http://localhost:5000/snippets';

export const fetchSnippets = () => axios.get(url);

export const createSnippet = (newSnippet) => axios.post(url, newSnippet)

export const editSnippet = (id, editedSnippet) => axios.patch(`${url}/${id}`, editedSnippet)

export const deleteSnippet = (id) => axios.delete(`${url}/${id}`);

export const shareSnippet = (id) => axios.get(`${url}/${id}/share`);

