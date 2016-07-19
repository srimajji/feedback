const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: { 
		type: String, 
		required: true
	},
	description: String
}, { _id: false });

const feedbackStatusSchema = mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	description: String
}, { _id: false });

const companySchema = mongoose.Schema({
	name: { type: String, required: true },
	alias: { type: String, required: true, unique: true },
	description: String,
	website: String,
	location: {
		street: String,
		city: String,
		state: String,
		zip: Number
	},
	categories: [categorySchema],
	feedbackStatuses: [feedbackStatusSchema]
}, { timestamps: true , select: false });

module.exports = mongoose.model('Company', companySchema);