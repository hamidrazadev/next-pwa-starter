"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, MessageSquare } from "lucide-react"
import Button from "@/components/Button"
import Link from "next/link"

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        department: 'general'
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '', department: 'general' })
        }, 3000)
    }

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Get in touch via email",
            value: "itmughal2023@gmail.com",
            action: "mailto:itmughal2023@gmail.com"
        },
        // {
        //     icon: Phone,
        //     title: "Call Us",
        //     description: "Speak with our team",
        //     value: "+1 (555) 123-4567",
        //     action: "tel:+15551234567"
        // },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "Our office location",
            value: "Lahore, Pakistan",
            action: "https://maps.google.com/maps?q=Lahore,Pakistan"
        }
    ]

    const departments = [
        { value: 'general', label: 'General Inquiry', icon: MessageSquare },
        { value: 'sales', label: 'Sales', icon: Users },
        { value: 'support', label: 'Technical Support', icon: Phone },
        { value: 'billing', label: 'Billing', icon: Mail }
    ]

    const stats = [
        { label: "Response Time", value: "< 24hrs", icon: Clock },
        { label: "Customer Satisfaction", value: "98%", icon: CheckCircle },
        { label: "Team Members", value: "50+", icon: Users }
    ]

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden py-4">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-black to-blue-950/30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>

            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-full mb-6 shadow-lg shadow-blue-500/25">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Have a question or want to work together? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mb-4">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-linear-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/5">
                        <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-emerald-600 to-emerald-700 rounded-full mb-4 animate-bounce">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {/* Department Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-3">Department</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {departments.map((dept) => (
                                            <label key={dept.value} className="cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="department"
                                                    value={dept.value}
                                                    checked={formData.department === dept.value}
                                                    onChange={handleInputChange}
                                                    className="sr-only"
                                                />
                                                <div className={`flex items-center p-3 rounded-xl border-2 transition-all duration-300 ${formData.department === dept.value
                                                    ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                                                    : 'border-gray-600/50 bg-gray-800/30 hover:border-gray-500'
                                                    }`}>
                                                    <dept.icon className={`w-4 h-4 mr-2 ${formData.department === dept.value ? 'text-blue-400' : 'text-gray-400'
                                                        }`} />
                                                    <span className={`text-sm ${formData.department === dept.value ? 'text-blue-300' : 'text-gray-300'
                                                        }`}>
                                                        {dept.label}
                                                    </span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${focusedField === 'name'
                                                ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-gray-800/70'
                                                : 'border-gray-600/50 hover:border-gray-500'
                                                }`}
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${focusedField === 'email'
                                                ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-gray-800/70'
                                                : 'border-gray-600/50 hover:border-gray-500'
                                                }`}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className={`w-full px-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${focusedField === 'subject'
                                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-gray-800/70'
                                            : 'border-gray-600/50 hover:border-gray-500'
                                            }`}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none backdrop-blur-sm ${focusedField === 'message'
                                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-gray-800/70'
                                            : 'border-gray-600/50 hover:border-gray-500'
                                            }`}
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full"
                                    size="lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-white">Other ways to reach us</h2>
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <Link
                                        key={index}
                                        href={method.action}
                                        className="block bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 group"
                                    >
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                                                <method.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                                                <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                                                <p className="text-blue-300 font-medium">{method.value}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                                Office Hours
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-white">Closed</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                                <p className="text-xs text-gray-400">
                                    All times are in Eastern Time (ET). Emergency support available 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}