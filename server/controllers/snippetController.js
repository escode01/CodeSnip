import mongoose from 'mongoose';
import Snippet from '../models/Snippet.js';

export const getSnippets = async (req, res) => {
    
    try {
        const snippets = await Snippet.find();

        res.status(200).json(snippets)
    } catch (error) {
        res.status(404).json({message: error});
    }
}
export const createSnippet = async (req, res) => {
    try {
        const { value } = req.body;
       
        const snippet = new Snippet({ value });
        await snippet.save();
    
        res.status(201).json(snippet);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const editSnippet = async (req, res) => {
    const { id: _id } = req.params;
    const snippet = req.body; 

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No such snippet")

    const editedSnippet = await Snippet.findByIdAndUpdate(_id, {...snippet, _id}, { new : true })

    res.json(editedSnippet);
}

export const deleteSnippet = async (req, res) => {
    const { id }=  req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No such snippet")

    await Snippet.findByIdAndRemove(id)

    res.json({ message: "Snippet deleted successfully" });
};

export const shareSnippet = async (req, res) => {
   const { id } = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No such snippet")

   const sharedSnippet = await Snippet.findById(id);
   res.json(sharedSnippet);
  }; 