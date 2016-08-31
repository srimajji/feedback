const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
	title: String,
	body: { type: String, required: true },
	status: String,
	category: { type: String, required: true },
	location: String,
	company: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Company',
		required: true
	},
	response: { type: mongoose.Schema.Types.ObjectId, ref: 'Response' },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);