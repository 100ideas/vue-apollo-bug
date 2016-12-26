import { Random } from 'meteor/random'

export const typeDefs = [
  `
type User {
  username: String
  tracks: [Track]
  _id: String
}
  `
]

export const resolvers = {
  User: {
  },
}
