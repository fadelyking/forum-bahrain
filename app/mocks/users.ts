import { fakerAR as faker } from "@faker-js/faker";
import { User } from "../types/data";
faker.seed(534231233);
const users: User = [
	{
		id: 1,
		username: "fadely",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.lorem.paragraphs(2),
		role: 1,
		donations: [30, 60],
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
	{
		id: 4,
		username: "Mohd43",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 1,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
	{
		id: 5,
		username: "بو علي",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 5,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
	{
		id: 6,
		username: "Mr. Rager",
		password: "Aa32231472",
		avatar: faker.image.avatar(),
		bio: faker.person.bio(),
		role: 1,
		created_at: faker.date.past(),
		updated_at: faker.date.recent(),
	},
];

export default users;
