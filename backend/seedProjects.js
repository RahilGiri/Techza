require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project'); // Adjust path if needed

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/devflow-clone';

const sampleProjects = [
    {
        title: "Aureon Enterprise Portal",
        category: "Enterprise Solutions",
        description: "A highly secure, scalable internal portal streamlining global workflows, HR management, and document versioning for Aureon's 500+ employees.",
        techStack: "React, Node.js, Express, MongoDB",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/aureon"
    },
    {
        title: "PropTech 360",
        category: "Real Estate",
        description: "Next-generation property discovery platform featuring 3D virtual tours, real-time agent matching, and automated contract generation.",
        techStack: "Next.js, TailwindCSS, PostgreSQL, Three.js",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/proptech"
    },
    {
        title: "Apex FinServe Dashboard",
        category: "Web Application",
        description: "Real-time biometric-secured financial analytics dashboard processing millions of analytical data points daily for institutional investors.",
        techStack: "Vue 3, Python, Django, AWS, Redis",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/apex"
    },
    {
        title: "Lumiere E-Commerce",
        category: "E-Commerce",
        description: "A headless e-commerce storefront for a luxury brand, resulting in a 40% conversion rate increase through sub-second page loads.",
        techStack: "React, Shopify Plus, GraphQL, Framer Motion",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/lumiere"
    },
    {
        title: "HealthHub Telemedicine",
        category: "Web Application",
        description: "HIPAA-compliant patient portal enabling secure video consultations, prescription tracking, and AI-driven symptom analysis.",
        techStack: "React Native, WebRTC, Node.js, MongoDB",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/healthhub"
    },
    {
        title: "Nimbus Cloud Management",
        category: "IT Services",
        description: "Centralized SaaS platform for automated Kubernetes cluster deployment, scaling, and intelligent resource optimization.",
        techStack: "Go, React, Docker, Kubernetes API",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/nimbus"
    },
    {
        title: "Zenith Global Logistics",
        category: "Enterprise Solutions",
        description: "End-to-end supply chain visibility tool tracking international freight movements with predictive weather routing AI.",
        techStack: "Angular, Spring Boot, MySQL, Google Maps API",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/zenith"
    },
    {
        title: "EduCore LMS Ecosystem",
        category: "Web Application",
        description: "Interactive learning management system supporting live video cohorts, automated grading, and gamified progress tracking.",
        techStack: "Next.js, TRPC, Prisma, PlanetScale",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/educore"
    },
    {
        title: "Vanguard Smart Factory",
        category: "Corporate Tech",
        description: "IoT integration dashboard monitoring factory floor sensor arrays to predict machine maintenance needs before failure.",
        techStack: "React, InfluxDB, Node-RED, MQTT",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/vanguard"
    },
    {
        title: "Velocity Ride Sharing App",
        category: "Mobile Application",
        description: "High-performance urban mobility application prioritizing electric vehicles, with advanced surge-pricing ML algorithms.",
        techStack: "Flutter, Firebase, Node.js, Google Cloud Platform",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000",
        link: "https://example.com/velocity"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Remove existing test project
        await Project.deleteMany({});
        console.log('Cleared existing projects.');

        const transformedProjects = sampleProjects.map(p => ({
            ...p,
            techStack: p.techStack.split(', ')
        }));

        await Project.insertMany(transformedProjects);
        console.log(`Successfully seeded ${transformedProjects.length} high-end projects!`);

        mongoose.disconnect();
    } catch (err) {
        console.error('Seeding error:', err);
        mongoose.disconnect();
    }
};

seedDB();
