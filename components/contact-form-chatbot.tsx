"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface ChatbotProps {
  onChatComplete: (chatData: { [key: string]: string }) => void;
  isLoading: boolean;
}

const questions = [
  "To start, could you tell us which service you are interested in?",
  "Great! What is your estimated budget for this project?",
  "Thanks. Is there any other information you'd like to share?",
]

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-2">
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
  </div>
)

export function Chatbot({ onChatComplete, isLoading }: ChatbotProps) {
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

    const newMessages = [...messages, { text: userInput, sender: "user" as "user" }]
    setMessages(newMessages)

    const questionKey = questions[currentQuestionIndex]; // Use the full question as a key
    const newChatData = { ...chatData, [questionKey]: userInput }
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
    <div className="bg-input/50 p-4 rounded-lg border border-border">
      <div className="h-72 overflow-y-auto mb-4 p-2 rounded-lg bg-background/70">
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-3 ${
              msg.sender === "bot" ? "justify-start" : "justify-end"
            }`}>
            <div
              className={`py-2 px-3 rounded-2xl max-w-[85%] shadow-sm ${
                msg.sender === "bot"
                  ? "bg-muted text-muted-foreground rounded-bl-none"
                  : "bg-primary text-primary-foreground rounded-br-none"
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
          className="w-full p-2 rounded-lg bg-background border-border border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
          placeholder="Your response..."
          disabled={isLoading}
        />
        <Button onClick={handleSendMessage} variant="ghost" size="icon" className="ml-2 text-primary" disabled={isLoading}>
          <Send className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}