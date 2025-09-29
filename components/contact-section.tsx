"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Stepper } from "@/components/stepper"
import { Chatbot } from "@/components/contact-form-chatbot"

const COUNTRY_CODES = [
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+32", country: "Belgium", flag: "🇧🇪" },
    { code: "+41", country: "Switzerland", flag: "🇨🇭" },
];

export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneCountryCode: COUNTRY_CODES[0].code,
        phoneNumber: "",
        message: "",
    })
    const [chatData, setChatData] = useState<{ [key: string]: string }>({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [currentStep, setCurrentStep] = useState(1);
    const successRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isSubmitted) {
            successRef.current?.focus();
        }
    }, [isSubmitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
            alert('Please fill in all required fields.');
            return;
        }
        setCurrentStep(2);
    };

    const handleNextToChatbot = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        setCurrentStep(3);
    };

    const handleChatComplete = (completedChatData: { [key: string]: string }) => {
        setChatData(completedChatData);
        handleFinalSubmit(completedChatData);
    }

    const handleFinalSubmit = async (finalChatData: { [key: string]: string }) => {
        setIsLoading(true);
        try {
            console.log("Chat Data being sent:", chatData);
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                    discussion: JSON.stringify(finalChatData, null, 2), // Convert chatData object to a formatted string
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send your message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="p-8 md:p-12 rounded-2xl">
                    {isSubmitted ? (
                        <div className="text-center p-8" ref={successRef} tabIndex={-1}>
                            <h3 className="text-2xl font-bold text-black mb-4">Thank you!</h3>
                            <p className="text-black">Your message has been sent successfully. We\'ll get back to you soon.</p>
                        </div>
                    ) : (
                        <>
                            <Stepper currentStep={currentStep} totalSteps={3} />
                            <h3 className="text-2xl font-bold text-center mb-2 text-black">
                                {currentStep === 1 ? "Your Details" : currentStep === 2 ? "Your Message" : "Additional Information"}
                            </h3>
                            <p className="text-black text-center mb-8">
                                {currentStep === 1 ? "Let's start with some basic information." : currentStep === 2 ? "Almost there! What can we help you with?" : "Please answer a few more questions."}
                            </p>
                            <form onSubmit={currentStep === 1 ? handleNext : handleNextToChatbot} className="grid grid-cols-1 gap-6">
                                {currentStep === 1 && (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">First Name</label>
                                                <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none" required />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">Last Name</label>
                                                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none" required />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                                            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
                                            <div className="flex space-x-2">
                                                <select id="phoneCountryCode" value={formData.phoneCountryCode} onChange={handleChange} className="flex-shrink-0 p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none">
                                                    {COUNTRY_CODES.map((country) => (
                                                        <option key={country.code} value={country.code} className="bg-white/50 text-black">
                                                            {country.code} {country.flag}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="12 34 56 78" className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none" required />
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 transition-colors">
                                            Next
                                        </Button>
                                    </>
                                )}
                                {currentStep === 2 && (
                                    <>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                                            <textarea id="message" value={formData.message} onChange={handleChange} placeholder="How can we assist you today?" rows={5} className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none" required></textarea>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Button type="button" onClick={() => setCurrentStep(1)} variant="ghost" className="text-black hover:text-gray-700">
                                                Back
                                            </Button>
                                            <Button type="submit" className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 transition-colors">
                                                Next
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </form>
                            {currentStep === 3 && (
                                <>
                                    {isLoading && (
                                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 rounded-2xl">
                                            <Loader2 className="h-10 w-10 animate-spin text-black" />
                                        </div>
                                    )}
                                    <Chatbot onChatComplete={handleChatComplete} isLoading={isLoading} />
                                    <div className="flex justify-start items-center mt-6">
                                        <Button type="button" onClick={() => setCurrentStep(2)} variant="ghost" className="text-black hover:text-gray-700">
                                            Back
                                        </Button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
