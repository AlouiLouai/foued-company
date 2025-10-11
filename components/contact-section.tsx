"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Stepper } from "@/components/stepper";
import { Chatbot } from "@/components/contact-form-chatbot";
import { countryCodes } from "@/lib/country-codes";
import { CountryCodeSelect } from "@/components/country-code-select";
import { usePathname } from "next/navigation";

export function ContactSection() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  // Translations
  const thankYou = locale === 'fr' ? "Merci !" : "Thank you!";
  const messageSent = locale === 'fr' ? "Votre message a été envoyé avec succès. Nous vous répondrons bientôt." : "Your message has been sent successfully. We'll get back to you soon.";
  const yourDetails = locale === 'fr' ? "Vos Coordonnées" : "Your Details";
  const basicInfo = locale === 'fr' ? "Commençons par quelques informations de base." : "Let's start with some basic information.";
  const firstNameLabel = locale === 'fr' ? "Prénom" : "First Name";
  const firstNamePlaceholder = locale === 'fr' ? "Jean" : "John";
  const lastNameLabel = locale === 'fr' ? "Nom" : "Last Name";
  const lastNamePlaceholder = locale === 'fr' ? "Dupont" : "Doe";
  const emailLabel = locale === 'fr' ? "Email" : "Email";
  const emailPlaceholder = locale === 'fr' ? "jean.dupont@example.com" : "john.doe@example.com";
  const phoneLabel = locale === 'fr' ? "Numéro de Téléphone" : "Phone Number";
  const phonePlaceholder = locale === 'fr' ? "01 23 45 67 89" : "12 34 56 78";
  const nextButton = locale === 'fr' ? "Suivant" : "Next";
  const requiredFieldsAlert = locale === 'fr' ? "Veuillez remplir tous les champs obligatoires." : "Please fill in all required fields.";

  const yourMessage = locale === 'fr' ? "Votre Message" : "Your Message";
  const almostThere = locale === 'fr' ? "Presque ! Comment pouvons-nous vous aider aujourd'hui ?" : "Almost there! What can we help you with?";
  const messageLabel = locale === 'fr' ? "Message" : "Message";
  const messagePlaceholder = locale === 'fr' ? "Comment pouvons-nous vous aider aujourd'hui ?" : "How can we assist you today?";
  const backButton = locale === 'fr' ? "Retour" : "Back";

  const additionalInfo = locale === 'fr' ? "Informations Complémentaires" : "Additional Information";
  const answerQuestions = locale === 'fr' ? "Veuillez répondre à quelques questions supplémentaires." : "Please answer a few more questions.";
  const sendingMessage = locale === 'fr' ? "Envoi de votre message..." : "Sending your message...";
  const failedToSend = locale === 'fr' ? "Échec de l'envoi de votre message. Veuillez réessayer plus tard." : "Failed to send your message. Please try again later.";

  const france = countryCodes.find((c) => c.country === "FR") || countryCodes[0];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountryCode: france.country,
    phoneNumber: france.code,
    message: "",
  });
  const [chatData, setChatData] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const successRef = useRef<HTMLDivElement>(null);

  const handleCountryChange = (country: any) => {
    const oldCountryCode = countryCodes.find(c => c.country === formData.phoneCountryCode)?.code || '';
    const numberWithoutCode = formData.phoneNumber.startsWith(oldCountryCode)
      ? formData.phoneNumber.substring(oldCountryCode.length)
      : formData.phoneNumber;

    setFormData({
      ...formData,
      phoneCountryCode: country.country,
      phoneNumber: country.code + numberWithoutCode,
    });
  };

  useEffect(() => {
    if (isSubmitted) {
      successRef.current?.focus();
    }
  }, [isSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setCurrentStep(2);
  };

  const handleNextToChatbot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setCurrentStep(3);
  };

  const handleChatComplete = (completedChatData: { [key: string]: string }) => {
    setChatData(completedChatData);
    handleFinalSubmit(completedChatData);
  };

  const handleFinalSubmit = async (finalChatData: {
    [key: string]: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          phoneCountryCode: formData.phoneCountryCode,
          phoneNumber: formData.phoneNumber,
          discussion: JSON.stringify(finalChatData, null, 2), // Convert chatData object to a formatted string
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your message. Please try again later.");
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
              <h3 className="text-2xl font-bold text-black mb-4">{thankYou}</h3>
              <p className="text-black">
                {messageSent}
              </p>
            </div>
          ) : (
            <>
              <Stepper currentStep={currentStep} totalSteps={3} />
              <h3 className="text-2xl font-bold text-center mb-2 text-black">
                {currentStep === 1
                  ? yourDetails
                  : currentStep === 2
                    ? yourMessage
                    : additionalInfo}
              </h3>
              <p className="text-black text-center mb-8">
                {currentStep === 1
                  ? basicInfo
                  : currentStep === 2
                    ? almostThere
                    : answerQuestions}
              </p>
              <form
                onSubmit={currentStep === 1 ? handleNext : handleNextToChatbot}
                className="grid grid-cols-1 gap-6"
              >
                {currentStep === 1 && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                                                <label
                                                  htmlFor="firstName"
                                                  className="block text-sm font-medium text-black mb-1"
                                                >
                                                  {firstNameLabel}
                                                </label>
                                                <input
                                                  type="text"
                                                  id="firstName"
                                                  value={formData.firstName}
                                                  onChange={handleChange}
                                                  placeholder={firstNamePlaceholder}
                                                  className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                                                  required
                                                />
                                              </div>
                                              <div>
                                                <label
                                                  htmlFor="lastName"
                                                  className="block text-sm font-medium text-black mb-1"
                                                >
                                                  {lastNameLabel}
                                                </label>
                                                <input
                                                  type="text"
                                                  id="lastName"
                                                  value={formData.lastName}
                                                  onChange={handleChange}
                                                  placeholder={lastNamePlaceholder}
                                                  className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                                                  required
                                                />
                                              </div>
                                            </div>
                                            <div>
                                              <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-black mb-1"
                                              >
                                                {emailLabel}
                                              </label>
                                              <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={emailPlaceholder}
                                                className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                                                required
                                              />
                                            </div>
                                            <div>
                                              <label className="block text-sm font-medium text-black mb-1">
                                                {phoneLabel}
                                              </label>
                                              <div className="flex space-x-2">
                                                <div className="relative">
                                                  <CountryCodeSelect
                                                    countryCodes={countryCodes}
                                                    selectedCode={formData.phoneCountryCode}
                                                    onChange={handleCountryChange}
                                                  />
                                                </div>
                                                <input
                                                  type="tel"
                                                  id="phoneNumber"
                                                  value={formData.phoneNumber}
                                                  onChange={handleChange}
                                                  placeholder={phonePlaceholder}
                                                  className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                                                  required
                                                />
                                              </div>
                                            </div>{" "}
                                            <Button
                                              type="submit"
                                              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 transition-colors"
                                            >
                                              {nextButton}
                                            </Button>                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        {messageLabel}
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={messagePlaceholder}
                        rows={5}
                        className="w-full p-3 rounded-lg bg-white/50 border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        variant="ghost"
                        className="text-black hover:text-gray-700"
                      >
                        {backButton}
                      </Button>
                      <Button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 transition-colors"
                      >
                        {nextButton}
                      </Button>
                    </div>
                  </>
                )}
              </form>
              {currentStep === 3 && (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center z-10 rounded-2xl">
                      <Loader2 className="h-12 w-12 animate-spin text-black mb-4" />
                      <p className="text-black text-lg">{sendingMessage}</p>
                    </div>
                  )}
                  <Chatbot
                    onChatComplete={handleChatComplete}
                    isLoading={isLoading}
                  />
                  <div className="flex justify-start items-center mt-6">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      variant="ghost"
                      className="text-black hover:text-gray-700"
                    >
                      {backButton}
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
