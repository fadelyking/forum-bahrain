import { faker } from "@faker-js/faker";

const threads = [
	{
		id: 1,
		title: faker.book.title(),
		user_id: 1,
		created_at: faker.date.past(),
	},
	{
		id: 2,
		title: faker.book.title(),
		user_id: 1,
		created_at: faker.date.past(),
	},
	{
		id: 3,
		title: faker.book.title(),
		user_id: 1,
		created_at: faker.date.past(),
	},
];
