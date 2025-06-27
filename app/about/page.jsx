export default function AboutPage() {
    // Data objects for content
    const heroData = {
        title: "About Us",
        subtitle: "Building the Future",
        description: "We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences that make a difference in the world."
    }

    const statsData = [
        { number: "50+", label: "Projects Completed" },
        { number: "25+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "10+", label: "Team Members" }
    ]

    const teamData = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "👩‍💼",
            bio: "Visionary leader with 10+ years in tech industry. Passionate about innovation and building great products.",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Michael Chen",
            role: "Lead Developer",
            image: "👨‍💻",
            bio: "Full-stack developer specializing in React, Node.js, and cloud architecture. Loves solving complex problems.",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Design",
            image: "👩‍🎨",
            bio: "Creative designer with expertise in UX/UI design and brand identity. Believes in design that tells a story.",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "David Kim",
            role: "Product Manager",
            image: "👨‍💼",
            bio: "Strategic thinker who bridges the gap between business and technology. Expert in agile methodologies.",
            social: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        }
    ]

    const valuesData = [
        {
            icon: "🚀",
            title: "Innovation",
            description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "We believe in the power of teamwork and building strong relationships with our clients and partners."
        },
        {
            icon: "💎",
            title: "Quality",
            description: "Excellence is not negotiable. We deliver high-quality solutions that exceed expectations."
        },
        {
            icon: "🌱",
            title: "Growth",
            description: "We're committed to continuous learning and helping our clients and team members grow."
        }
    ]

    const companyStory = {
        title: "Our Story",
        content: [
            "Founded in 2019, our company started as a small team of passionate developers who shared a vision of creating exceptional digital experiences. What began as a startup in a garage has grown into a thriving company with clients around the world.",
            "Our journey has been marked by continuous innovation, learning, and adaptation. We've weathered challenges, celebrated victories, and most importantly, never lost sight of our core mission: to build technology that makes a positive impact.",
            "Today, we're proud to work with startups, established businesses, and everything in between. Our diverse portfolio spans web applications, mobile apps, and enterprise solutions, but our commitment remains the same - delivering excellence in everything we do."
        ]
    }

    const missionVision = {
        mission: {
            title: "Our Mission",
            description: "To empower businesses and individuals through innovative technology solutions that are accessible, reliable, and impactful."
        },
        vision: {
            title: "Our Vision",
            description: "To be the leading technology partner that transforms ideas into reality and helps shape a better digital future."
        }
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            {heroData.title}
                        </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
                        {heroData.subtitle}
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed">
                        {heroData.description}
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="text-center group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100/70 text-sm sm:text-base lg:text-lg font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="text-3xl mr-4">🎯</span>
                                {missionVision.mission.title}
                            </h3>
                            <p className="text-blue-100/80 text-lg leading-relaxed">
                                {missionVision.mission.description}
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="text-3xl mr-4">🔮</span>
                                {missionVision.vision.title}
                            </h3>
                            <p className="text-blue-100/80 text-lg leading-relaxed">
                                {missionVision.vision.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {companyStory.title}
                        </h2>
                    </div>
                    <div className="space-y-8">
                        {companyStory.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg text-blue-100/80 leading-relaxed text-center"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our <span className="text-blue-400">Values</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valuesData.map((value, index) => (
                            <div
                                key={value.title}
                                className="group bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 text-center"
                            >
                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Meet Our <span className="text-blue-400">Team</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
                            The talented individuals who make the magic happen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamData.map((member, index) => (
                            <div
                                key={member.name}
                                className="group bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 text-center"
                            >
                                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-blue-400 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href={member.social.linkedin}
                                        className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
                                    >
                                        💼
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
                                    >
                                        🐦
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
                                    >
                                        👨‍💻
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-blue-900/10 to-blue-950/20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to work with <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">us</span>?
                        </h2>
                        <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Let's discuss your project and see how we can help bring your vision to life.
                        </p>
                        <button className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed disabled:transform-none transform active:scale-95 select-none relative overflow-hidden px-10 py-4 text-lg min-h-[3.75rem] bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 focus:ring-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 group">
                            <span className="mr-3">Get In Touch</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}