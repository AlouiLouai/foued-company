"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Bot } from "lucide-react"

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-2">
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
  </div>
)

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: "bot" | "user" }[]>([])
  const [userInput, setUserInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          { text: "Welcome to Renovexium! How can I assist you today?", sender: "bot" },
        ])
        setIsTyping(false)
      }, 1500)
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    const newMessages = [...messages, { text: userInput, sender: "user" as "user" }]
    setMessages(newMessages)
    setUserInput("")
    setIsTyping(true)

    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "Thank you for your message. An agent will be with you shortly.", sender: "bot" },
      ])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
        {isOpen && (
          <div className="w-80 h-[450px] bg-card border border-border rounded-xl shadow-2xl flex flex-col">
            <div className="p-4 bg-primary text-primary-foreground rounded-t-xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6" />
                    <h3 className="font-bold text-lg">Renovexium Assistant</h3>
                </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-primary/80">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto bg-background/60">
              {messages.map((msg, index) => (
                <div key={index} className={`flex mb-3 ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}>
                  <div
                    className={`py-2 px-3 rounded-2xl max-w-[80%] shadow-sm ${
                      msg.sender === "bot"
                        ? "bg-muted text-muted-foreground rounded-bl-none"
                        : "bg-primary text-primary-foreground rounded-br-none"
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-border bg-card rounded-b-xl">
              <div className="flex items-center">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="w-full p-2 rounded-lg bg-input border-border border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                  placeholder="Ask a question..."
                />
                <Button onClick={handleSendMessage} variant="ghost" size="icon" className="ml-2 text-primary">
                  <Send className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl mt-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      )}
    </div>
  )
}
