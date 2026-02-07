import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'Aether Dashboard',
    category: 'Full-Stack SaaS',
    color: '#ef4444',
    tech: 'React · Node.js · PostgreSQL · WebSocket',
    description:
      'Real-time analytics dashboard for IoT fleet management. Handles 50k+ concurrent device streams with sub-200ms latency. Built custom WebSocket orchestration layer and interactive D3 visualizations.',
  },
  {
    id: '02',
    title: 'Catalyst CMS',
    category: 'Headless CMS Platform',
    color: '#a855f7',
    tech: 'Next.js · GraphQL · MongoDB · AWS Lambda',
    description:
      'Enterprise headless CMS serving 2M+ page views monthly. Features a drag-and-drop visual editor, real-time collaboration, and a plugin architecture supporting 40+ community extensions.',
  },
  {
    id: '03',
    title: 'Pulse Messenger',
    category: 'Real-Time Communication',
    color: '#3b82f6',
    tech: 'React Native · Elixir · Phoenix · Redis',
    description:
      'End-to-end encrypted messaging platform with voice channels, screen share, and AI-powered thread summaries. Scaled to 100k DAU with 99.97% uptime over 18 months.',
  },
  {
    id: '04',
    title: 'Terraform Viz',
    category: 'DevOps Tooling',
    color: '#10b981',
    tech: 'TypeScript · Go · D3.js · Docker',
    description:
      'Open-source infrastructure visualization tool that parses Terraform state files and renders interactive dependency graphs. 4.2k GitHub stars and adopted by three Fortune 500 companies.',
  },
  {
    id: '05',
    title: 'Mercato',
    category: 'E-Commerce Engine',
    color: '#f59e0b',
    tech: 'Remix · Stripe · Prisma · Cloudflare Workers',
    description:
      'Composable commerce platform powering 200+ storefronts. Handles $8M+ GMV annually with edge-rendered pages loading in under 400ms. Custom checkout pipeline with multi-currency support.',
  },
];

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
  },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs', 'Elixir'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Terraform', 'Kubernetes'] },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const proxy = { skew: 0 },
        skewSetter = gsap.quickSetter('.vdf-skew', 'skewY', 'deg'),
        clamp = gsap.utils.clamp(-20, 20);

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: 'power3',
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });

      gsap.utils.toArray<HTMLElement>('.vdf-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.vdf-stagger').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Section tracking
      ['hero', 'projects', 'skills', 'about', 'contact'].forEach((id) => {
        ScrollTrigger.create({
          trigger: `#vdf-${id}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(`vdf-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className='min-h-screen overflow-hidden text-white bg-neutral-900 selection:bg-red-500/30'
    >
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference'>
        <button
          type='button'
          onClick={() => scrollTo('hero')}
          className='text-2xl font-bold tracking-tighter uppercase'
        >
          CB<span className='text-red-500'>.</span>
        </button>
        <div className='items-center hidden gap-8 md:flex'>
          {navItems.map((item) => (
            <button
              type='button'
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                activeSection === item.id ? 'text-red-500' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <header
        id='vdf-hero'
        className='relative flex flex-col justify-center h-screen px-8 pt-20 lg:px-24'
      >
        <div className='absolute flex-col hidden gap-3 -translate-y-1/2 top-1/2 right-12 xl:flex mix-blend-difference'>
          {navItems.map((item) => (
            <button
              type='button'
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-8 h-[2px] transition-all duration-500 ${
                activeSection === item.id ? 'bg-red-500 w-12' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <p className='vdf-skew text-red-500 uppercase tracking-[0.4em] text-sm font-mono mb-6'>
          Full-Stack Developer
        </p>
        <h1 className='vdf-skew text-[11vw] lg:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase'>
          Corey
          <br />
          Burns
        </h1>
        <div className='flex items-center gap-4 mt-12'>
          <div className='w-24 h-px bg-red-500' />
          <p className='uppercase tracking-[0.3em] text-sm text-neutral-400'>
            Building performant, beautiful web experiences
          </p>
        </div>
        <div className='flex gap-6 mt-8'>
          <button
            type='button'
            onClick={() => scrollTo('projects')}
            className='px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 transform bg-red-600 hover:bg-red-700 hover:-skew-x-6'
          >
            View Work
          </button>
          <button
            type='button'
            onClick={() => scrollTo('contact')}
            className='px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 border border-white/20 hover:border-red-500 hover:text-red-500'
          >
            Contact
          </button>
        </div>
      </header>

      {/* Projects */}
      <section id='vdf-projects' className='px-8 py-32 lg:px-24'>
        <div className='flex items-end justify-between mb-20 vdf-reveal'>
          <div>
            <p className='mb-2 font-mono text-sm tracking-widest text-red-500 uppercase'>
              Featured Work
            </p>
            <h2 className='text-5xl font-black tracking-tighter uppercase md:text-7xl'>Projects</h2>
          </div>
          <p className='hidden font-mono text-sm md:block text-neutral-500'>05 Selected</p>
        </div>
        <div className='flex flex-col gap-24'>
          {projects.map((project) => (
            <button
              key={project.id}
              type='button'
              className='relative w-full p-0 pt-12 text-left bg-transparent border-t cursor-pointer vdf-reveal group border-neutral-800'
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-end'>
                <div className='vdf-skew'>
                  <span className='block mb-4 font-mono text-sm text-red-500'>{project.id}</span>
                  <h3
                    className='text-5xl font-black tracking-tighter uppercase transition-colors duration-300 md:text-7xl'
                    style={{
                      color: hoveredProject === project.id ? project.color : 'white',
                      WebkitTextStroke:
                        hoveredProject === project.id ? '0px' : '1px rgba(255,255,255,0.2)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className='max-w-xl mt-4 text-sm leading-relaxed text-neutral-400'>
                    {project.description}
                  </p>
                  <p className='mt-3 font-mono text-xs text-neutral-600'>{project.tech}</p>
                </div>
                <div className='text-right vdf-skew shrink-0'>
                  <p className='text-xl tracking-widest uppercase text-neutral-400'>
                    {project.category}
                  </p>
                  <div
                    className='h-2 mt-4 transition-all duration-500 ease-out bg-current'
                    style={{
                      width: hoveredProject === project.id ? '100%' : '0%',
                      backgroundColor: project.color,
                    }}
                  />
                </div>
              </div>
              <div
                className='absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 group-hover:opacity-10 bg-gradient-to-r from-transparent via-current to-transparent'
                style={{ color: project.color }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id='vdf-skills' className='px-8 py-32 lg:px-24 bg-neutral-950'>
        <div className='mb-20 vdf-reveal'>
          <p className='mb-2 font-mono text-sm tracking-widest text-red-500 uppercase'>
            Capabilities
          </p>
          <h2 className='text-5xl font-black tracking-tighter uppercase md:text-7xl'>Skills</h2>
        </div>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {skills.map((group) => (
            <div key={group.category} className='vdf-reveal'>
              <h3 className='pb-3 mb-6 font-mono text-sm tracking-widest text-red-500 uppercase border-b border-neutral-800'>
                {group.category}
              </h3>
              <ul className='space-y-3'>
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className='flex items-center gap-3 text-lg font-light transition-colors vdf-stagger text-neutral-300 group/skill hover:text-white'
                  >
                    <span className='h-[2px] w-0 bg-red-500 group-hover/skill:w-4 transition-all duration-300' />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id='vdf-about' className='relative px-8 py-32 lg:px-24'>
        <div className='grid items-center gap-16 vdf-reveal lg:grid-cols-2'>
          <div>
            <p className='mb-2 font-mono text-sm tracking-widest text-red-500 uppercase'>
              Background
            </p>
            <h2 className='mb-8 text-5xl font-black tracking-tighter uppercase md:text-7xl'>
              About Me
            </h2>
            <div className='space-y-6 text-lg leading-relaxed text-neutral-400'>
              <p>
                I'm a full-stack developer with 8+ years of experience turning complex problems into
                elegant, performant web applications. I thrive at the intersection of design and
                engineering — where pixel-perfect interfaces meet robust, scalable architectures.
              </p>
              <p>
                My journey started with hacking together PHP forums as a teenager and evolved
                through computer science at university, startup culture, and enterprise consulting.
                Today I specialize in React ecosystems, Node.js backends, and cloud-native
                infrastructure.
              </p>
              <p>
                When I'm not shipping code, you'll find me contributing to open-source projects,
                experimenting with generative art, or deep-diving into the latest web platform APIs.
              </p>
            </div>
          </div>
          <div className='relative vdf-reveal'>
            <div className='relative overflow-hidden rounded-sm aspect-square bg-neutral-800'>
              <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-purple-500/10' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <p className='text-[120px] font-black text-white/5 leading-none'>CB</p>
                  <div className='mt-4 space-y-1'>
                    <p className='font-mono text-xs text-neutral-600'>8+ YEARS EXPERIENCE</p>
                    <p className='font-mono text-xs text-neutral-600'>50+ PROJECTS SHIPPED</p>
                    <p className='font-mono text-xs text-neutral-600'>4.2K GITHUB STARS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute w-full h-full border rounded-sm -bottom-4 -right-4 border-red-500/20 -z-10' />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id='vdf-contact'
        className='min-h-[70vh] flex items-center justify-center bg-neutral-950 px-8 relative overflow-hidden'
      >
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px]' />
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[96px]' />
        </div>
        <div className='relative z-10 text-center vdf-reveal'>
          <p className='mb-4 font-mono text-sm tracking-widest text-red-500 uppercase'>
            Get In Touch
          </p>
          <h3 className='mb-6 text-5xl font-black tracking-tight uppercase md:text-7xl'>
            Let's Build
            <br />
            Something Great
          </h3>
          <p className='max-w-md mx-auto mb-10 text-lg text-neutral-400'>
            Always open to interesting projects and collaborations. Let's talk about what we can
            create together.
          </p>
          <a
            href='mailto:corey@coreyburns.dev'
            className='inline-block px-10 py-4 font-bold tracking-widest text-white uppercase transition-colors duration-300 transform bg-red-600 hover:bg-red-700 hover:-skew-x-12'
          >
            corey@coreyburns.dev
          </a>
          <div className='flex justify-center gap-8 mt-10 text-sm tracking-widest uppercase text-neutral-500'>
            <span className='transition-colors cursor-pointer hover:text-red-500'>GitHub</span>
            <span className='transition-colors cursor-pointer hover:text-red-500'>LinkedIn</span>
            <span className='transition-colors cursor-pointer hover:text-red-500'>Twitter</span>
          </div>
        </div>
      </section>
    </div>
  );
}
