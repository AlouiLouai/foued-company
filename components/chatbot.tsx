"use client"
import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

const BOT_AVATAR = "https://randomuser.me/api/portraits/lego/1.jpg";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! How can I help you today?", sender: "bot", timestamp: new Date().toLocaleTimeString() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: "user", timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = { text: `You said: "${userMessage.text}"`, sender: "bot", timestamp: new Date().toLocaleTimeString() };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          className="rounded-full h-16 w-16 shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsOpen(true)}
          size="icon"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-card border border-border rounded-lg shadow-xl w-[400px] h-[500px] flex flex-col animate-in slide-in-from-bottom-10 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-lg">
            <div className="flex items-center space-x-3">
              <img src={BOT_AVATAR} alt="Bot Avatar" className="h-8 w-8 rounded-full" />
              <div>
                <h3 className="text-lg font-bold text-primary-foreground">Foued Bot</h3>
                <p className="text-xs text-primary-foreground/80">Online - Typically replies in minutes</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary/80"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <img src={BOT_AVATAR} alt="Bot Avatar" className="h-7 w-7 rounded-full" />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm relative ${msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"}
                  `}
                >
                  {msg.text}
                  <span className="block text-right text-xs opacity-70 mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-end gap-2 justify-start">
                <img src={BOT_AVATAR} alt="Bot Avatar" className="h-7 w-7 rounded-full" />
                <div className="bg-muted text-muted-foreground p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-border flex items-center bg-background">
            <input
              type="text"
              className="flex-1 p-2.5 rounded-full border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground shadow-inner mr-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              className="rounded-full h-10 w-10 p-0 flex-shrink-0"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
