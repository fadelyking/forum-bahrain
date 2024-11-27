import { fakerAR as faker } from "@faker-js/faker";
import { Comments } from "../types/data";
faker.seed(123);
const comments: Comments = [
	{
		id: 1,
		thread_id: 1,
		user_id: 4,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 2,
		thread_id: 1,
		user_id: 5,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 3,
		thread_id: 2,
		user_id: 6,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 4,
		thread_id: 2,
		user_id: 4,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 5,
		thread_id: 3,
		user_id: 5,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 6,
		thread_id: 3,
		user_id: 6,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 7,
		thread_id: 1,
		user_id: 4,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 8,
		thread_id: 2,
		user_id: 5,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
	{
		id: 9,
		thread_id: 3,
		user_id: 6,
		content: faker.lorem.sentence(),
		created_at: faker.date.past(),
	},
];

export default comments;
