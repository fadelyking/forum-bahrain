import { faker } from "@faker-js/faker";
import { Category } from "../types/data";
faker.seed(123);
const categories: Category = [
	{
		id: 1,
		name: "الأعضاء الجدد والترحيب", // New Members and Welcomes
		engName: "New Members and Welcomes",
		icon: "👋",
		description: "قم بتقديم نفسك والترحيب بالأعضاء الجدد في المنتدى.",
		created_at: faker.date.past(),
	},
	{
		id: 2,
		name: "إعلانات المنتدى", // Forum Announcements
		engName: "Forum Announcements",
		icon: "📢",
		description: "ابقَ على اطلاع بأحدث الأخبار والإعلانات الخاصة بالمنتدى.",
		created_at: faker.date.past(),
	},
	{
		id: 3,
		name: "الأخبار المحلية", // Local News
		engName: "Local News",
		icon: "📰",
		description: "ناقش وشارك أحدث الأخبار المحلية في البحرين.",
		created_at: faker.date.past(),
	},
	{
		id: 4,
		name: "الأعمال والخدمات", // Business and Services
		engName: "Business and Services",
		icon: "🏢",
		description: "شارك أو ناقش خدمات وأعمال تجارية متعلقة بالمجتمع.",
		created_at: faker.date.past(),
	},
	{
		id: 5,
		name: "التعليم والوظائف", // Education and Jobs
		engName: "Education and Jobs",
		icon: "🎓",
		description: "شارك فرص العمل أو مصادر التعليم المختلفة.",
		created_at: faker.date.past(),
	},
	{
		id: 6,
		name: "العقارات والإيجارات", // Real Estate and Rentals
		engName: "Real Estate and Rentals",
		icon: "🏠",
		description: "ابحث عن عقارات للبيع أو الإيجار أو قم بنشر عقارك.",
		created_at: faker.date.past(),
	},
	{
		id: 7,
		name: "السيارات والمواصلات", // Cars and Transportation
		engName: "Cars and Transportation",
		icon: "🚗",
		description: "ناقش السيارات ووسائل النقل في البحرين.",
		created_at: faker.date.past(),
	},
	{
		id: 8,
		name: "الفعاليات والأنشطة", // Events and Activities
		engName: "Events and Activities",
		icon: "🎉",
		description: "شارك واكتشف الأنشطة والفعاليات القريبة منك.",
		created_at: faker.date.past(),
	},
	{
		id: 9,
		name: "الطعام والمطاعم", // Food and Restaurants
		engName: "Food and Restaurants",
		icon: "🍴",
		description: "ناقش أفضل المطاعم والأكلات المفضلة لديك.",
		created_at: faker.date.past(),
	},
	{
		id: 10,
		name: "المجتمع والثقافة", // Community and Culture
		engName: "Community and Culture",
		icon: "🌍",
		description: "احتفل وناقش الثقافة البحرينية والمجتمع المحلي.",
		created_at: faker.date.past(),
	},
	{
		id: 11,
		name: "السفر والسياحة", // Travel and Tourism
		engName: "Travel and Tourism",
		icon: "✈️",
		description: "خطط لرحلاتك وناقش نصائح السفر.",
		created_at: faker.date.past(),
	},
	{
		id: 12,
		name: "الصحة والجمال", // Health and Beauty
		engName: "Health and Beauty",
		icon: "💄",
		description: "تحدث عن نصائح الصحة وجمال الحياة اليومية.",
		created_at: faker.date.past(),
	},
	{
		id: 13,
		name: "الألعاب والتكنولوجيا", // Gaming and Technology
		engName: "Gaming and Technology",
		icon: "🎮",
		description: "ناقش أحدث الألعاب وأجهزة التكنولوجيا.",
		created_at: faker.date.past(),
	},
	{
		id: 14,
		name: "الأسئلة والنقاشات", // General Questions and Discussions
		engName: "General Questions and Discussions",
		icon: "💬",
		description: "شارك أفكارك أو اطرح أسئلة في مواضيع عامة.",
		created_at: faker.date.past(),
	},
];

export default categories;
