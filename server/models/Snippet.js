import mongoose, { Schema } from "mongoose";

const snippetSchema = new Schema ({
    value: {
        type: String, 
        required: true,
    },
});

const Snippet = mongoose.model("Snippet", snippetSchema);

export default Snippet;