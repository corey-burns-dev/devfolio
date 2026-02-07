import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		id: "01",
		title: "vibeshift",
		category: "Social Platform",
		color: "#3b82f6",
		tech: "Go · React · PostgreSQL · Redis · Docker",
		description:
			"Reddit-style community app focused on creativity and shared interests, without politics, religion, or news-driven content.",
		url: "https://vibeshift.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/vibeshift",
	},
	{
		id: "02",
		title: "hackernews",
		category: "News Client",
		color: "#fb923c",
		tech: "Next.js 16 · React 19 · Framer Motion · HN Firebase API",
		description:
			"A cleaner, more visual Hacker News reader that fetches live stories and comments from the official API.",
		url: "https://hackernews.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/hackernews",
	},
	{
		id: "03",
		title: "blog",
		category: "Journal & Insights",
		color: "#10b981",
		tech: "Astro 5 · TypeScript · Tailwind CSS · MDX",
		description:
			"Personal blog exploring technical deep-dives, system engineering, and the occasional hobbyist project.",
		url: "https://blog.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/blog",
	},
	{
		id: "04",
		title: "dream-transmission",
		category: "Ambient Experience",
		color: "#a855f7",
		tech: "React · Three.js · Framer Motion · Web Audio",
		description:
			"Meditative music experience with live shader-driven sky visuals, ambient themes, and an immersive reactive player.",
		url: "https://dreaming.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/dream-transmission",
	},
	{
		id: "05",
		title: "wake-transmission",
		category: "Audio-Reactive Visualizer",
		color: "#06b6d4",
		tech: "React · Three.js · Tone.js · Framer Motion",
		description:
			"Realtime visualizer with frequency-band analysis, cinematic post-processing, theme system, and monitor-style HUD overlays.",
		url: "https://wake.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/wake-transmission",
	},
	{
		id: "06",
		title: "image-mage",
		category: "Media Tooling",
		color: "#f59e0b",
		tech: "Next.js 16 · Sharp · TypeScript · Tailwind CSS",
		description:
			"Image conversion and compression tool with batch uploads, quality presets, target-size tuning, and ZIP export workflows.",
		url: "https://image-mage.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/image-mage",
	},
	{
		id: "07",
		title: "tools-hub",
		category: "Developer Utilities",
		color: "#22c55e",
		tech: "Astro 5 · TypeScript · Tailwind CSS · Cloudflare Workers",
		description:
			"Suite of practical dev tools (JSON, regex, generators, converters, and more) packaged in a fast, clean Astro app.",
		url: "https://tools.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/tools-hub",
	},
	{
		id: "08",
		title: "games-hub",
		category: "Arcade Platform",
		color: "#ef4444",
		tech: "Next.js 16 · React 19 · TypeScript · Tailwind CSS",
		description:
			"Browser arcade featuring 13 instant-play games including Snake, Pong, Flappy Jump, and 2048, with a single polished hub UI.",
		url: "https://games.coreyburns.ca",
		repo: "https://github.com/corey-burns-dev/games-hub",
	},
];

const skills = [
	{
		category: "Frontend",
		items: [
			{ name: "HTML", icon: "/icons/html.svg" },
			{ name: "JavaScript", icon: "/icons/javascript.svg" },
			{ name: "React", icon: "/icons/react-auto.svg" },
			{ name: "Redux", icon: "/icons/redux.svg" },
			{ name: "Vue.js", icon: "/icons/vuejs-auto.svg" },
			{ name: "Next.js", icon: "/icons/nextjs-auto.svg" },
			{ name: "Remix", icon: "/icons/remix-auto.svg" },
			{ name: "TypeScript", icon: "/icons/typescript.svg" },
			{ name: "Tailwind CSS", icon: "/icons/tailwindcss-auto.svg" },
			{ name: "Sass", icon: "/icons/sass.svg" },
			{ name: "Material UI", icon: "/icons/materialui-auto.svg" },
			{ name: "Three.js", icon: "/icons/threejs-auto.svg" },
			{ name: "Framer Motion", icon: "/icons/framer-auto.svg" },
			{ name: "Vite", icon: "/icons/vite-auto.svg" },
			{ name: "Webpack", icon: "/icons/webpack-auto.svg" },
		],
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", icon: "/icons/nodejs-auto.svg" },
			{ name: "PHP", icon: "/icons/php-auto.svg" },
			{ name: "Ruby", icon: "/icons/ruby.svg" },
			{ name: "Python", icon: "/icons/python-auto.svg" },
			{ name: "Go", icon: "/icons/golang.svg" },
			{ name: "GraphQL", icon: "/icons/graphql-auto.svg" },
			{ name: "REST APIs", icon: "/icons/api-auto.svg" },
			{ name: "Elixir", icon: "/icons/elixir-auto.svg" },
			{ name: "Nginx", icon: "/icons/nginx.svg" },
			{ name: "Firebase", icon: "/icons/firebase-auto.svg" },
			{ name: "PostgreSQL", icon: "/icons/postgresql-auto.svg" },
			{ name: "MySQL", icon: "/icons/mysql-auto.svg" },
			{ name: "MongoDB", icon: "/icons/mongodb.svg" },
			{ name: "Redis", icon: "/icons/redis-auto.svg" },
			{ name: "Prisma", icon: "/icons/prisma.svg" },
			{ name: "Sequelize", icon: "/icons/sequelize-auto.svg" },
			{ name: "Drizzle ORM", icon: "/icons/drizzle-auto.svg" },
		],
	},
	{
		category: "DevOps & Cloud",
		items: [
			{ name: "Git", icon: "/icons/git-auto.svg" },
			{ name: "Docker", icon: "/icons/docker.svg" },
			{ name: "AWS", icon: "/icons/aws-auto.svg" },
			{ name: "Cloudflare", icon: "/icons/cloudflare-auto.svg" },
			{ name: "Workers", icon: "/icons/workers-auto.svg" },
			{ name: "Vercel", icon: "/icons/vercel-auto.svg" },
			{ name: "GitHub Actions", icon: "/icons/githubactions-auto.svg" },
			{ name: "Sentry", icon: "/icons/sentry.svg" },
			{ name: "Terraform", icon: "/icons/terraform-auto.svg" },
			{ name: "Kubernetes", icon: "/icons/kubernetes.svg" },
		],
	},
	{
		category: "Systems & Platforms",
		items: [
			{ name: "Linux", icon: "/icons/linux-auto.svg" },
			{ name: "Ubuntu", icon: "/icons/ubuntu.svg" },
			{ name: "Arch Linux", icon: "/icons/arch-auto.svg" },
			{ name: "Red Hat", icon: "/icons/redhat-auto.svg" },
			{ name: "WordPress", icon: "/icons/wordpress.svg" },
		],
	},
];

export default function App() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const ctx = gsap.context(() => {
			const proxy = { skew: 0 },
				skewSetter = gsap.quickSetter(".vdf-skew", "skewY", "deg"),
				clamp = gsap.utils.clamp(-20, 20);

			ScrollTrigger.create({
				onUpdate: (self) => {
					const skew = clamp(self.getVelocity() / -300);
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {
							skew: 0,
							duration: 0.8,
							ease: "power3",
							overwrite: true,
							onUpdate: () => skewSetter(proxy.skew),
						});
					}
				},
			});

			gsap.utils.toArray<HTMLElement>(".vdf-reveal").forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, y: 80 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power4.out",
						scrollTrigger: {
							trigger: el,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>(".vdf-stagger").forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, x: -40 },
					{
						opacity: 1,
						x: 0,
						duration: 0.6,
						delay: 0,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 90%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			// Section tracking
			["hero", "projects", "skills", "about", "contact"].forEach((id) => {
				ScrollTrigger.create({
					trigger: `#vdf-${id}`,
					start: "top center",
					end: "bottom center",
					onEnter: () => setActiveSection(id),
					onEnterBack: () => setActiveSection(id),
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const navItems = [
		{ id: "hero", label: "Home" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "about", label: "About" },
		{ id: "contact", label: "Contact" },
	];

	const scrollTo = (id: string) => {
		document
			.getElementById(`vdf-${id}`)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			ref={containerRef}
			className="min-h-screen overflow-x-hidden text-white bg-neutral-900 selection:bg-red-500/30"
		>
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
				<button
					type="button"
					onClick={() => scrollTo("hero")}
					className="text-2xl font-bold tracking-tighter uppercase"
				>
					CB<span className="text-red-500">.</span>
				</button>
				<div className="items-center hidden gap-8 md:flex">
					{navItems.map((item) => (
						<button
							type="button"
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className={`text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
								activeSection === item.id
									? "text-red-500"
									: "text-white/60 hover:text-white"
							}`}
						>
							{item.label}
						</button>
					))}
				</div>
			</nav>

			{/* Hero */}
			<header
				id="vdf-hero"
				className="relative flex flex-col justify-center h-screen px-8 pt-20 lg:px-24"
			>
				<div className="absolute flex-col hidden gap-3 -translate-y-1/2 top-1/2 right-12 xl:flex mix-blend-difference">
					{navItems.map((item) => (
						<button
							type="button"
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className={`w-8 h-[2px] transition-all duration-500 ${
								activeSection === item.id ? "bg-red-500 w-12" : "bg-white/20"
							}`}
						/>
					))}
				</div>
				<p className="vdf-skew text-red-500 uppercase tracking-[0.4em] text-sm font-mono mb-6">
					Full-Stack Developer
				</p>
				<h1 className="vdf-skew text-[11vw] lg:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase">
					Corey
					<br />
					Burns
				</h1>
				<div className="flex items-center gap-4 mt-12">
					<div className="w-24 h-px bg-red-500" />
					<p className="uppercase tracking-[0.3em] text-sm text-neutral-400">
						Building performant, beautiful web experiences
					</p>
				</div>
				<div className="flex gap-6 mt-8">
					<button
						type="button"
						onClick={() => scrollTo("projects")}
						className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 transform bg-red-600 hover:bg-red-700 hover:-skew-x-6"
					>
						View Work
					</button>
					<button
						type="button"
						onClick={() => scrollTo("contact")}
						className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 border border-white/20 hover:border-red-500 hover:text-red-500"
					>
						Contact
					</button>
				</div>
			</header>

			{/* Projects */}
			<section id="vdf-projects" className="px-8 py-32 lg:px-24">
				<div className="flex items-end justify-between mb-20 vdf-reveal">
					<div>
						<p className="mb-2 font-mono text-sm tracking-widest text-red-500 uppercase">
							Featured Work
						</p>
						<h2 className="text-5xl font-black tracking-tighter uppercase md:text-7xl">
							Projects
						</h2>
					</div>
					<p className="hidden font-mono text-sm md:block text-neutral-500">
						{String(projects.length).padStart(2, "0")} Selected
					</p>
				</div>
				<div className="flex flex-col gap-24">
					{projects.map((project) => (
						<div
							key={project.id}
							className="relative w-full p-0 pt-12 text-left bg-transparent border-t vdf-reveal group border-neutral-800"
							style={
								{ "--project-color": project.color } as React.CSSProperties
							}
						>
							<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
								<div className="text-left bg-transparent border-none vdf-skew grow">
									<div className="flex items-center justify-between gap-4 mb-4">
										<span className="font-mono text-sm text-red-500">
											{project.id}
										</span>
										<a
											href={project.repo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-3 px-4 py-2 transition-all duration-300 border rounded-full border-white/10 hover:border-white/40 hover:bg-white/5 group/repo"
											title="View Repository"
										>
											<img
												src="/icons/github.svg"
												alt="GitHub"
												className="w-5 h-5 transition-opacity opacity-50 group-hover/repo:opacity-100 invert"
											/>
											<span className="font-mono text-xs tracking-widest uppercase text-neutral-500 group-hover/repo:text-white">
												Repository
											</span>
										</a>
									</div>
									<button
										type="button"
										className="text-left bg-transparent border-none cursor-pointer"
										onClick={() =>
											window.open(project.url, "_blank", "noopener,noreferrer")
										}
									>
										<h3 className="text-5xl font-black tracking-tighter uppercase transition-colors duration-300 md:text-8xl group-hover:text-(--project-color) text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:0px]">
											{project.title}
										</h3>
									</button>
									<p className="max-w-xl mt-6 text-base leading-relaxed text-neutral-400">
										{project.description}
									</p>
									<p className="mt-4 font-mono text-xs tracking-wider text-neutral-600">
										{project.tech}
									</p>
								</div>
								<div className="text-right vdf-skew shrink-0">
									<p className="text-2xl font-bold tracking-widest uppercase text-neutral-400">
										{project.category}
									</p>
									<div
										className="h-2 mt-4 transition-all duration-500 ease-out bg-(--project-color) w-0 group-hover:w-full"
										style={{ backgroundColor: project.color }}
									/>
								</div>
							</div>
							<div
								className="absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 group-hover:opacity-10 bg-linear-to-r from-transparent via-current to-transparent"
								style={{ color: project.color }}
							/>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section
				id="vdf-skills"
				className="px-8 py-14 lg:px-24 lg:py-16 bg-neutral-950"
			>
				<div className="mb-6 vdf-reveal">
					<p className="mb-2 font-mono text-sm tracking-widest text-red-500 uppercase">
						Capabilities
					</p>
					<h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl">
						Skills
					</h2>
				</div>
				<div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
					{skills.map((group) => (
						<div key={group.category} className="vdf-reveal">
							<h3 className="pb-1 mb-1 font-mono text-[11px] tracking-[0.14em] text-red-500 uppercase border-b border-neutral-800">
								{group.category}
							</h3>
							<ul className="grid grid-cols-3 gap-0.5 sm:grid-cols-4">
								{group.items.map((skill) => (
									<li
										key={skill.name}
										className="vdf-stagger group/skill"
										title={skill.name}
									>
										<span className="relative flex flex-col items-center justify-center min-h-[74px] gap-0.5 p-0.5 transition-transform duration-300 group-hover/skill:-translate-y-0.5">
											<img
												src={skill.icon}
												alt=""
												aria-hidden="true"
												loading="lazy"
												className="object-contain w-10 h-10"
											/>
											<span className="text-[11px] leading-tight text-center uppercase tracking-[0.02em] text-neutral-500 group-hover/skill:text-neutral-200">
												{skill.name}
											</span>
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section id="vdf-about" className="relative px-8 py-32 lg:px-24">
				<div className="grid items-center gap-16 vdf-reveal lg:grid-cols-2">
					<div>
						<p className="mb-2 font-mono text-sm tracking-widest text-red-500 uppercase">
							Background
						</p>
						<h2 className="mb-8 text-5xl font-black tracking-tighter uppercase md:text-7xl">
							About Me
						</h2>
						<div className="space-y-6 text-lg leading-relaxed text-neutral-400">
							<p>
								I’m a full-stack developer in progress with a strong interest in
								Linux, homelabbing, and understanding how systems work beneath
								the surface. I enjoy building projects end to end, experimenting
								with new tools, and blending clean design with practical
								engineering.
							</p>
							<p>
								I started with HTML, CSS, and JavaScript, then moved into React
								and Node.js, eventually working with Next.js and TypeScript. I’m
								particularly drawn to the operational side of development, from
								containerizing services with Docker to running and maintaining
								full application stacks on my own infrastructure. I enjoy
								understanding how frontend, backend, and deployment all fit
								together as a cohesive system.
							</p>
							<p>
								Outside of development, I spend time playing guitar, gaming,
								exploring anime and visual novels, and staying active through
								biking, hiking, and the gym. Curiosity and continuous learning
								drive everything I do.
							</p>
						</div>
					</div>
					<div className="relative vdf-reveal">
						<div className="relative overflow-hidden rounded-sm aspect-square bg-neutral-900">
							<img
								src="/images/photo.jpg"
								alt="Portrait of Corey Burns"
								loading="lazy"
								className="object-cover object-center w-full h-full"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-neutral-950/55 via-transparent to-red-500/10" />
						</div>
						<div className="absolute w-full h-full border rounded-sm -bottom-4 -right-4 border-red-500/20 -z-10" />
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				id="vdf-contact"
				className="min-h-screen flex items-center justify-center bg-neutral-950 px-8 py-32 relative overflow-hidden"
			>
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[160px] animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />
				</div>
				<div className="relative z-10 w-full max-w-4xl text-center vdf-reveal">
					<p className="mb-6 font-mono text-sm tracking-[0.5em] text-red-500 uppercase">
						Available for opportunities
					</p>
					<h3 className="mb-12 text-6xl font-black tracking-tight uppercase md:text-9xl leading-[0.9]">
						Let's Build
						<br />
						<span className="text-transparent outline-title [-webkit-text-stroke:1px_white]">
							Something
						</span>
						<br />
						Great.
					</h3>

					<div className="flex flex-col items-center gap-12 mt-20">
						<a
							href="mailto:coreyburns@outlook.com"
							className="group relative inline-flex items-center gap-6 px-12 py-6 text-xl md:text-2xl font-bold tracking-tighter text-white uppercase transition-all duration-500 bg-red-600 hover:bg-red-700 hover:-translate-y-1"
						>
							<span className="relative z-10">coreyburns@outlook.com</span>
							<div className="absolute inset-0 w-full h-full bg-red-800 translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
						</a>

						<div className="flex flex-wrap justify-center gap-12 mt-8">
							<a
								href="https://github.com/corey-burns-dev"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center gap-4 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110 group/social"
							>
								<div className="p-4 border rounded-full border-white/10 group-hover/social:border-white/30 group-hover/social:bg-white/5">
									<img
										src="/icons/github.svg"
										alt="GitHub"
										className="w-8 h-8 invert"
									/>
								</div>
								<span className="font-mono text-xs tracking-widest uppercase">
									GitHub
								</span>
							</a>
							<a
								href="https://linkedin.com/in/corey-burns"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center gap-4 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110 group/social"
							>
								<div className="p-4 border rounded-full border-white/10 group-hover/social:border-white/30 group-hover/social:bg-white/5">
									<img
										src="/icons/linkedin.svg"
										alt="LinkedIn"
										className="w-8 h-8 invert"
									/>
								</div>
								<span className="font-mono text-xs tracking-widest uppercase">
									LinkedIn
								</span>
							</a>
						</div>
					</div>

					<div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
						<p>© 2026 Corey Burns</p>
						<p>Built with Astro & GSAP</p>
						<p>Crafted in Canada</p>
					</div>
				</div>
			</section>
		</div>
	);
}
