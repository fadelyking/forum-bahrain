import { fakerAR as faker } from "@faker-js/faker";

const threads = [
	{
		id: 1,
		title: faker.lorem.words(3), // Generate a short title in Arabic
		user_id: 1,
		content: faker.lorem.paragraphs(2), // Generate longer Arabic text
		created_at: faker.date.past(),
		likes: 14,
	},
	{
		id: 2,
		title: faker.lorem.words(4),
		user_id: 2,
		content: faker.lorem.paragraphs(2),
		created_at: faker.date.past(),
		likes: 2,
	},
	{
		id: 3,
		title: faker.lorem.words(3),
		user_id: 3,
		content: faker.lorem.paragraphs(2),
		created_at: faker.date.past(),
		likes: 23,
	},
];

export default threads;
