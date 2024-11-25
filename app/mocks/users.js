import { faker } from "@faker-js/faker";

const users = [
	{
		id: 1,
		username: "fadely",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 1,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
	{
		id: 2,
		username: "Jeff",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 1,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
	{
		id: 3,
		username: "Ali",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 1,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
];

export default users;
