
import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Nishith",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Nishith",
	description: "A Computer Engineer creating graphics designs and static websites.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1-7nlUFaBVrg8TyaNBzOXxVbj5XtSEywW35Y8jOu7k5U/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am pursuing my B.Tech from Veer Surendra Sai University Of Technology (VSSUT) from 2020 with a degree in Information technology.",
		"I am a result-oriented and inquisitive individual with a strong passion for design and technology. I'm on a journey to explore and contribute in the world of creativity and innovation. My aim is to secure a position where I can leverage my skills and abilities to foster growth within organizations, while also nurturing my professional development.",
		"When I’m not programming, I focus on my hobbies which are: football, playing video games, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Graphics Desiging",
			description: "I create visually compelling narratives that captivate and inspire.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Book-Library",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Nishith-N-Das/book-library",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at nndas2508@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:nndas2508@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Nishith Nihar Das | Information Technology |Graphics Design | Reactjs developer",
	description: "I create graphics designs and static websites. I am pursuing my B.Tech from Veer Surendra Sai University Of Technology (VSSUT) from 2020 with a degree in Information technology.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@nishith",
	description: "IT Engineer | Graphics Designer | Reactjs Developer",
	cards: [
		{
			title: "My Designs",
			link: "https://drive.google.com/drive/folders/1xrLeRnjdAerJSBCWQ0JV8de0MEDguDn_?usp=sharing",
		},
		{
			title: "My Resume",
			link: "https://docs.google.com/document/d/1-7nlUFaBVrg8TyaNBzOXxVbj5XtSEywW35Y8jOu7k5U/edit?usp=sharing",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Nishith-N-Das",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/nishithnihardas/",
		},
	]
}