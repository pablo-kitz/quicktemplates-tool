import {Schema, model} from "mongoose";

const DocumentSchema = new Schema({
	name: String,
	text: String,
	placeholders: {
		type: Map,
		of: String,
	},
});

export default model("Document", DocumentSchema);
