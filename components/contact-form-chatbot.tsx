"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { usePathname } from "next/navigation";

interface ChatbotProps {
  onChatComplete: (chatData: { [key: string]: string }) => void;
  isLoading: boolean;
}

export function Chatbot({ onChatComplete, isLoading }: ChatbotProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const questions = locale === 'fr' ? [
    "Pour commencer, pourriez-vous nous dire quel service vous intéresse ?",
    "Super ! Quel est votre budget estimé pour ce projet ?",
    "Merci. Y a-t-il d'autres informations que vous aimeriez partager ?",
  ] : [
    "To start, could you tell us which service you are interested in?",
    "Great! What is your estimated budget for this project?",
    "Thanks. Is there any other information you'd like to share?",
  ];

  const placeholder = locale === 'fr' ? "Votre réponse..." : "Your response...";

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-2">
      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
    </div>
  );

  const [messages, setMessages] = useState<{ text: string; sender: "bot" | "user" }[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [chatData, setChatData] = useState<{ [key: string]: string }>({})
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages([{ text: questions[0], sender: "bot" }])
      setIsTyping(false)
    }, 1000)
  }, [])

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    const messageText = userInput;

    const newMessages = [...messages, { text: messageText, sender: "user" as "user" }]
    setMessages(newMessages)

    const questionKey = questions[currentQuestionIndex]; // Use the full question as a key
    const newChatData = { ...chatData, [questionKey]: messageText }
    setChatData(newChatData)

    setUserInput("")
    setIsTyping(true)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setTimeout(() => {
        setMessages([...newMessages, { text: questions[currentQuestionIndex + 1], sender: "bot" }])
        setIsTyping(false)
      }, 1200)
    } else {
      setTimeout(() => {
        setIsTyping(false)
        onChatComplete(newChatData)
      }, 1000)
    }
  }

  return (
    <div className="p-4 rounded-lg border border-black">
      <div className="h-72 overflow-y-auto mb-4 p-2 rounded-lg bg-transparent">
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-3 ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}>
            <div
              className={`py-2 px-3 rounded-2xl max-w-[85%] shadow-sm ${
                msg.sender === "bot"
                  ? "bg-white/50 text-black rounded-bl-none"
                  : "bg-black text-white rounded-br-none"
              }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}

      </div>
      <div className="flex items-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="w-full p-2 rounded-lg bg-white/50 border-black border focus:ring-2 focus:ring-black focus:border-transparent transition-colors outline-none"
            placeholder={placeholder}
            disabled={isLoading}
          />
        <Button onClick={handleSendMessage} variant="ghost" size="icon" className="ml-2 text-black" disabled={isLoading}>
          <Send className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}