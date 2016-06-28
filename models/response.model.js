const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	body: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now },
	lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

const responseSchema = mongoose.Schema({
	title: String,
	body: { type:String, required: true },
	feedback: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Feedback', 
		required: true 
	},
	company: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Company', 
		required: true 
	},
	comments: [commentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Response', responseSchema);