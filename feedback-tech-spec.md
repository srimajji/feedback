# Feedback 

## Overview

Feedback is a tool for customers to submit any and all feedback when shopping at a brick and motor store

### Models

Objects that will be used for this application

- Company
	
	```
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
}, { timestamps: true , select: false }
```
- Feedback

	```
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
	response: { type: mongoose.Schema.Types.ObjectId, 	ref: 'Response' },
	}, { timestamps: true }
	```
- Response

	```
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
	}, { timestamps: true }
	```

### API

- Company
	- GET `/companies/`
	- POST `/companies/`
	- GET `/companies/:id`
	- GET `/companies/:id/shallow`
	- PUT `/companies/:id`
	- DELETE `/companies/:id`
	
- Feedback
	- GET `/feedbacks/`
	- POST `/feedbacks/`
	- GET `/feedbacks/:id`
	- GET `/feedbacks/:id/shallow`
	- PUT `/feedbacks/:id`
	- DELETE `/feedbacks/:id`
	
- Response
	- GET `/responses/`
	- POST `/responses/`
	- GET `/responses/:id`
	- GET `/responses/:id/shallow`
	- PUT `/responses/:id`
	- DELETE `/responses/:id`
	
#### API Examples 

- `/companies/:id`

	```
{
  "_id": "576cc29c2fcc8b48121a6dc3",
  "updatedAt": "2016-06-24T05:18:20.591Z",
  "createdAt": "2016-06-24T05:18:20.591Z",
  "name": "nordstorm",
  "alias": "nordstorm",
  "website": "http://nordstorm.com",
  "description": "All the clothes you need you will find here",
  "__v": 0,
  "feedbackStatuses": [
    {
      "status": "OPEN"
    },
    {
      "status": "IN REVIEW"
    },
    {
      "status": "CHECKING"
    },
    {
      "status": "CLOSED"
    }
  ],
  "categories": [
    {
      "name": "Store Experience",
      "description": "Anything related to your experience in the store"
    },
    {
      "name": "Building",
      "description": "Anything related to the building itself"
    },
    {
      "name": "Cleaniless",
      "description": "Anything related to the cleanliness of the store"
    }
  ],
  "location": {
    "street": "Market St",
    "city": "SF",
    "state": "CA",
    "zip": 94123
  }
}
	```

- `/feedbacks/:id`

	```
	{
  	"_id": "576cc4d47c262c41428e2ffe",
  	"updatedAt": "2016-06-24T06:18:35.152Z",
  	"createdAt": "2016-06-24T05:27:48.660Z",
  	"title": "Something smells",
  	"body": "Some kid took a dump by aile 15",
  	"category": "Cleaniless",
  	"location": "aile 15",
  	"company": "576cc29c2fcc8b48121a6dc3",
  	"__v": 0,
  	"response": "576ccf30363692a508ba28e8"
	}
	```
- `/responses/:id`

	```
	  {
    	"_id": "576ccf30363692a508ba28e8",
    	"updatedAt": "2016-06-24T06:12:00.101Z",
    	"createdAt": "2016-06-24T06:12:00.101Z",
    	"title": "our bad",
    	"body": "Someone will be over to take care of it 		shortly. Thank you for the feedback!",
    	"feedback": "576cc4d47c262c41428e2ffe",
    	"company": "576cc29c2fcc8b48121a6dc3",
    	"__v": 0,
    	"comments": []
  		}
	```



	

### Stack

- Node
- Express for REST
- React
- Redux
- Webpack for bundling
- Bootstrap/Material for UI

