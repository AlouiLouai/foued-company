"use client"
import { useState } from "react"
// Assuming these are custom components you have
import { Button } from "@/components/ui/button" 
import { Loader2, MapPin, Phone, Mail } from "lucide-react"

// Defines the available country codes for the phone selector
const COUNTRY_CODES = [
    { code: "+32", country: "Belgium" }, // Belgium
    { code: "+33", country: "France" },  // France
    { code: "+44", country: "UK" },      // United Kingdom (Default)
];

// The component is now a Client Component using the 't' prop
export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneCountryCode: COUNTRY_CODES[2].code, // Default to +44 (UK)
        phoneNumber: "",
        message: "", // Keeping message field, assuming 'Next' leads to this step
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [currentStep, setCurrentStep] = useState(1); // 1: Personal Details, 2: Message/Submit

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    // Handles the transition from Step 1 (Details) to Step 2 (Message/Final Submit)
    const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Simple client-side validation for Step 1 fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
            // NOTE: In a real app, use a custom modal instead of alert()
            alert('validation_required'); 
            return;
        }

        // Successfully validated, move to the next step
        setCurrentStep(2);
    };

    // Handles the final form submission from Step 2
    const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSubmitted(true);
        console.log("Form submitted with data:", formData);
        // In a real application, you would send formData to your backend here
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50/70">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Single Contact Block */}
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200">
                    
                    {/* Contact Information (Moved inside the single block, simplified) */}
                    <div className="flex justify-center space-x-6 mb-10 text-center">
                        <div className="flex flex-col items-center">
                            <MapPin className="h-6 w-6 text-indigo-600 mb-1" />
                            <p className="text-sm font-medium text-gray-600">{'address'}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Phone className="h-6 w-6 text-indigo-600 mb-1" />
                            <p className="text-sm font-medium text-gray-600">{'phone'}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Mail className="h-6 w-6 text-indigo-600 mb-1" />
                            <p className="text-sm font-medium text-gray-600">{'email'}</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                        {currentStep === 1 ? 'step 1' : 'step 2'}
                    </h3>

                    {/* Submission Success Message */}
                    {isSubmitted ? (
                        <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-xl text-green-700 font-semibold">{'submission_success'}</p>
                        </div>
                    ) : (
                        // Form (Multi-Step Logic)
                        <form onSubmit={currentStep === 1 ? handleNext : handleFinalSubmit} className="grid grid-cols-1 gap-6">
                            
                            {/* STEP 1: Personal Details */}
                            {currentStep === 1 && (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">{'firstname'}</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder={'placeholder firstname'}
                                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">{'lastname'}</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder={'placeholder lastname'}
                                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{'email'}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={'placeholder email'}
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Phone Number with Country Code Selector */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{'phone'}</label>
                                        <div className="flex space-x-2">
                                            <select
                                                id="phoneCountryCode"
                                                value={formData.phoneCountryCode}
                                                onChange={handleChange}
                                                className="flex-shrink-0 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                            >
                                                {COUNTRY_CODES.map((country) => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.code} ({country.country})
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder={'placeholder phone'}
                                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 transition-colors">
                                        {'next'}
                                    </Button>
                                </>
                            )}

                            {/* STEP 2: Message/Final Submit */}
                            {currentStep === 2 && (
                                <>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{'message'}</label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={'placeholder message'}
                                            rows={5}
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors outline-none"
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex space-x-4">
                                        <Button 
                                            type="button" 
                                            onClick={() => setCurrentStep(1)}
                                            variant="outline"
                                            className="w-1/3 bg-white border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            {'back'}
                                        </Button>
                                        <Button type="submit" disabled={isLoading} className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 transition-colors">
                                            {isLoading ? (
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            ) : null}
                                            {isLoading ? 'sending' : 'submit'}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

// --------------------------------------------------------------------------------------------------
// Mock translation keys for reference in a 'common.json' file (assuming you use next-i18next convention)
// --------------------------------------------------------------------------------------------------
/*
{
  "contact": {
    "title": "Get in Touch with Our Team",
    "step1_title": "1/2: Your Details",
    "step2_title": "2/2: Your Message",
    "info_title": "Our Details",
    "info_description": "We'd love to hear from you! Reach out to us through any of the following channels.",
    "address": "123 Construction Ave, Buildtown, USA",
    "phone": "(123) 456-7890",
    "email": "contact@fouedcompany.com",
    "firstname": "First Name",
    "name_last": "Last Name",
    "email": "Email Address",
    "phone": "Phone Number",
    "message": "Your Message",
    "placeholder_firstname": "John",
    "placeholder_name_last": "Doe",
    "placeholder_email": "john.doe@example.com",
    "placeholder_phone": "12 34 56 78",
    "button_next": "Next: Write Message",
    "button_back": "Back",
    "button_submit": "Send Message",
    "button_sending": "Sending...",
    "submission_success": "Thank you for your message! We will get back to you shortly.",
    "validation_required": "Please fill in all required fields to continue."
  }
}
*/
