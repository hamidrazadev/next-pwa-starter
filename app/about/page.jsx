"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Linkedin } from "lucide-react"
import { X } from "lucide-react"
import { Github } from "lucide-react"
import { Twitter } from "lucide-react"

// Animated Stat Component
function AnimatedStat({ number, label }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const parsed = parseInt(number)
        if (isNaN(parsed)) return

        let start = 0
        const duration = 2000
        const stepTime = Math.max(Math.floor(duration / parsed), 1)

        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= parsed) clearInterval(timer)
        }, stepTime)

        return () => clearInterval(timer)
    }, [number])

    return (
        <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {count}{number.includes("+") ? "+" : ""}
            </div>
            <div className="text-blue-100/70 text-sm sm:text-base lg:text-lg font-medium">
                {label}
            </div>
        </div>
    )
}

export default function AboutPage() {
    // Hero
    const heroData = {
        title: "About Us",
        subtitle: "Building the Future",
        description:
            "We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences that make a difference in the world."
    }

    // Stats
    const statsData = [
        { number: "50+", label: "Projects Completed" },
        { number: "25+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "10+", label: "Team Members" }
    ]

    // Company Story
    const companyStory = {
        title: "Our Story",
        content: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ]
    }

    // Mission & Vision
    const missionVision = {
        mission: {
            title: "Our Mission",
            description:
                "To empower businesses and individuals through innovative technology solutions that are accessible, reliable, and impactful."
        },
        vision: {
            title: "Our Vision",
            description:
                "To be the leading technology partner that transforms ideas into reality and helps shape a better digital future."
        }
    }

    // Values
    const valuesData = [
        {
            icon: "🚀",
            title: "Innovation",
            description:
                "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description:
                "We believe in the power of teamwork and building strong relationships with our clients and partners."
        },
        {
            icon: "💎",
            title: "Quality",
            description:
                "Excellence is not negotiable. We deliver high-quality solutions that exceed expectations."
        },
        {
            icon: "🌱",
            title: "Growth",
            description:
                "We're committed to continuous learning and helping our clients and team members grow."
        }
    ]

    // Team
    const teamData = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            bio:
                "Visionary leader with 10+ years in tech industry. Passionate about innovation and building great products.",
            social: {
                github: "https://github.com/hamidrazadev",
                linkedin: "https://www.linkedin.com/in/hamidrazadev",
                twitter: "https://x.com/@HamidRaza_Dev"
            }
        },
        {
            name: "Michael Chen",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            bio:
                "Full-stack developer specializing in React, Node.js, and cloud architecture. Loves solving complex problems.",
            social: {
                github: "https://github.com/hamidrazadev",
                linkedin: "https://www.linkedin.com/in/hamidrazadev",
                twitter: "https://x.com/@HamidRaza_Dev"
            }
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            bio:
                "Creative designer with expertise in UX/UI design and brand identity. Believes in design that tells a story.",
            social: {
                github: "https://github.com/hamidrazadev",
                linkedin: "https://www.linkedin.com/in/hamidrazadev",
                twitter: "https://x.com/@HamidRaza_Dev"
            }
        },
        {
            name: "David Kim",
            role: "Product Manager",
            image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
            bio:
                "Strategic thinker who bridges the gap between business and technology. Expert in agile methodologies.",
            social: {
                github: "https://github.com/hamidrazadev",
                linkedin: "https://www.linkedin.com/in/hamidrazadev",
                twitter: "https://x.com/@HamidRaza_Dev"
            }
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero */}
            <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
                <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-black to-blue-900/10"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
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

            {/* Stats */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-linear-to-b from-black via-blue-950/5 to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat) => (
                        <AnimatedStat key={stat.label} {...stat} />
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {[missionVision.mission, missionVision.vision].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-linear-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="text-3xl mr-4">{idx === 0 ? "🎯" : "🔮"}</span>
                                {item.title}
                            </h3>
                            <p className="text-blue-100/80 text-lg leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">{companyStory.title}</h2>
                    <div className="space-y-6">
                        {companyStory.content.map((para, idx) => (
                            <p key={idx} className="text-lg text-blue-100/80 leading-relaxed">{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 sm:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our <span className="text-blue-400">Values</span>
                    </h2>
                    <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {valuesData.map((value) => (
                        <div
                            key={value.title}
                            className="group bg-linear-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 text-center"
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h3>
                            <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="py-16 sm:py-20 lg:py-24 relative">
                <div className="absolute inset-0 bg-linear-to-b from-black via-blue-950/5 to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Meet Our <span className="text-blue-400">Team</span>
                    </h2>
                    <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">The talented individuals who make the magic happen</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member) => (
                        <div
                            key={member.name}
                            className="group bg-linear-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 text-center"
                        >
                            <div className="mx-auto mb-4 w-28 h-28 rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                                <Image unoptimized src={member.image} alt={member.name} width={112} height={112} className="rounded-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{member.name}</h3>
                            <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                            <p className="text-blue-100/70 text-sm leading-relaxed mb-6">{member.bio}</p>
                            <div className="flex justify-center space-x-4">
                                <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
                                    <Linkedin />
                                </Link>
                                <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
                                    <Twitter />
                                </Link>
                                <Link href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
                                    <Github />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 lg:py-24 relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/20 via-blue-900/10 to-blue-950/20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-linear-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to work with <span className="bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">us</span>?
                        </h2>
                        <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Let's discuss your project and see how we can help bring your vision to life.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black transform active:scale-95 px-10 py-4 text-lg bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
