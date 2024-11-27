import { fakerAR as faker } from "@faker-js/faker";
import { Thread } from "../types/data";

const threads: Thread = [
	{
		id: 1,
		category: 2,
		title: faker.lorem.words(3), // Generate a short title in Arabic
		user_id: 1,
		content: faker.lorem.paragraphs(2), // Generate longer Arabic text
		created_at: faker.date.past(),
		likes: 14,
		comments_count: 3, // Number of comments linked to this thread
	},
	{
		id: 2,
		category: 2,
		title: faker.lorem.words(4),
		user_id: 2,
		content: faker.lorem.paragraphs(2),
		created_at: faker.date.past(),
		likes: 2,
		comments_count: 3, // Number of comments linked to this thread
	},
	{
		id: 3,
		category: 2,
		title: faker.lorem.words(3),
		user_id: 3,
		content: faker.lorem.paragraphs(2),
		created_at: faker.date.past(),
		likes: 23,
		comments_count: 3, // Number of comments linked to this thread
	},
];
export default threads;
