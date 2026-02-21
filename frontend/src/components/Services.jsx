import { motion } from 'framer-motion';

const services = [
    {
        tag: "PERFORMANCE-FOCUSED",
        title: "Business Websites",
        description: "High-performance websites that load fast, rank well, and convert visitors into customers. Built with modern architecture for speed and reliability.",
        pills: ["SEO-optimized", "Fast load times", "Mobile-first design", "Analytics integration"]
    },
    {
        tag: "DATA-DRIVEN INTERFACES",
        title: "Web Applications & Dashboards",
        description: "Custom web applications with real-time data visualization, user management, and business logic tailored to your workflows.",
        pills: ["Real-time updates", "Role-based access", "Data visualization", "API integrations"]
    },
    {
        tag: "OPERATIONAL EFFICIENCY",
        title: "Internal Tools & Automation",
        description: "Admin panels, CRM systems, and workflow automation tools that eliminate manual work and reduce operational overhead.",
        pills: ["Process automation", "Custom workflows", "Team collaboration", "Reporting systems"]
    },
    {
        tag: "ENTERPRISE-GRADE",
        title: "Custom Software Solutions",
        description: "End-to-end software development for complex business requirements. From architecture to deployment, we handle the full stack.",
        pills: ["Scalable architecture", "Security-first", "Cloud deployment", "Ongoing support"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-brand-dark relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="mb-20 max-w-3xl">
                    <span className="text-brand-green font-bold tracking-wider uppercase text-[11px] mb-6 block">OUR SERVICES</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[52px] font-display font-black text-white tracking-tight leading-[1.15] mb-8">
                        Engineering-First Software<br />Development
                    </h2>
                    <p className="text-[#888] text-[17px] leading-relaxed max-w-2xl">
                        We specialize in building software that solves real business problems — from high-performance websites to complex enterprise applications. Every project is built with code quality, performance, and long-term maintainability in mind.
                    </p>
                </div>

                {/* 2x2 Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#121212] border border-[#222] rounded-2xl p-8 md:p-10 hover:border-[#333] transition-colors h-full flex flex-col"
                        >
                            <span className="text-brand-green font-bold tracking-wider uppercase text-[10px] mb-6 block">
                                {service.tag}
                            </span>

                            <h3 className="text-[22px] font-bold text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-[#888] text-[15px] leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.pills.map((pill, pIndex) => (
                                    <span
                                        key={pIndex}
                                        className="bg-white/5 border border-white/5 rounded-full px-4 py-1.5 text-[12px] text-[#888] font-medium hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Background Typography decoration - purely visual based on the faint text behind cards in the image */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none z-0 opacity-5">
                    <span className="text-[250px] font-display font-black text-white whitespace-nowrap tracking-tighter mix-blend-overlay">SOFTWARE</span>
                </div>
            </div>
        </section>
    );
};

export default Services;
