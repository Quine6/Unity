"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { UserProgress } from "../hooks/useProgress";
import { Send, Loader2, User } from "lucide-react";

interface ChatbotTutorProps {
  progress: UserProgress;
  currentTopic: string;
  onUnlockNext: () => void;
}

interface Message {
  role: "user" | "model";
  content: string;
}

export default function ChatbotTutor({ progress, currentTopic, onUnlockNext }: ChatbotTutorProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: `¡Hola ${progress.name}! Soy tu Mentor Senior en Nexus Game Lab. Actualmente estamos en **${currentTopic}**. ¿Estás listo para el reto? Acuérdate de que si algo no está claro, puedes preguntarme. ¡A programar con estilo! 🚀`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          progress: progress,
          currentTopic,
          history: messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }))
        }),
      });

      const data = await response.json();
      
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
      
      if (data.isCorrectAndUnlock) {
        onUnlockNext();
      }
    } catch (error) {
      console.error("Error communicating with tutor:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Vaya, he tenido un problema de conexión. ¿Puedes enviarlo de nuevo? 😅" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-96 h-screen bg-[var(--color-bg-panel)] flex flex-col border-l border-[var(--color-border-dark)] shadow-xl relative z-20">
      <div className="p-5 border-b border-[var(--color-border-dark)] bg-[#111418] flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-blue-dim)] border border-[var(--color-brand-blue)] flex items-center justify-center glow-blue">
            <User className="text-[var(--color-brand-blue)]" />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-brand-green)] border-2 border-[#111418] rounded-full"></div>
        </div>
        <div>
          <h2 className="font-bold tracking-widest text-[var(--color-brand-blue)] text-xs uppercase">Mentor Senior</h2>
          <p className="text-[10px] text-[var(--color-brand-green)] font-bold">● ONLINE</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col max-w-[85%] ${
              msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
            }`}
          >
            <span className="text-[10px] text-[var(--color-text-muted)] mb-1 uppercase tracking-widest px-1">
              {msg.role === "user" ? "Tú" : "Mentor"}
            </span>
            <div
              className={`p-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-[var(--color-brand-blue-dim)] text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/20 rounded-tr-none"
                  : "glass-panel text-[var(--color-text-main)] rounded-tl-none border-[var(--color-border-dark)]"
              }`}
            >
              {msg.role === "user" ? (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              ) : (
                <div className="prose prose-sm prose-invert prose-p:leading-relaxed prose-pre:bg-[#0d0d0d] prose-pre:border prose-pre:border-[#333] max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs mr-auto">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>El mentor está escribiendo...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-[var(--color-bg-dark)] border-t border-[var(--color-border-dark)]">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Escribe tu código o pregunta..."
            className="w-full bg-[#111418] border border-[var(--color-border-dark)] rounded-xl py-3 pl-4 pr-12 text-sm text-white resize-none focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)] transition-all custom-scrollbar"
            rows={2}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 bottom-2 w-8 h-8 flex items-center justify-center bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)] rounded-lg hover:bg-[var(--color-brand-green)] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 mr-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
