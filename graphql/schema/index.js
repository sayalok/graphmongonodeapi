const { buildSchema }   = require('graphql')

module.exports = buildSchema(`
	
	type ProductType {
		_id: ID!
		title: String!
		desc: String!
		price: Float!
		date: String!
		createdBy: UserType
	}

	type UserType {
		_id: ID!
		email: String!
		password: String
		createdProduct: [ProductType!]
	}

	input ProductInput {
		title: String!
		desc: String!
		price: Float!
		date: String!
	}

	input UserInput {
		email: String!
		password: String!
	}

	type RootQuery {
		products: [ProductType!]!
		users: [UserType!]!
	}

	type RootMutation {
		createProduct(productInput:ProductInput): ProductType
		createUser(userInput: UserInput): UserType
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);