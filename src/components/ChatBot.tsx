import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Message d'accueil automatique
      setTimeout(() => {
        addBotMessage("Bonjour ! 👋 Je suis l'assistant virtuel de VoxFlow.ai. Comment puis-je vous aider aujourd'hui ?");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Réponses automatiques intelligentes
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = inputValue.toLowerCase();

      if (lowerInput.includes("prix") || lowerInput.includes("tarif") || lowerInput.includes("coût")) {
        botResponse = "Nos solutions sont personnalisables selon vos besoins. Je vous invite à demander une démo pour obtenir un devis sur mesure. Souhaitez-vous que je vous mette en contact avec notre équipe ?";
      } else if (lowerInput.includes("démo") || lowerInput.includes("demo") || lowerInput.includes("essai")) {
        botResponse = "Excellent ! Vous pouvez demander une démo gratuite en cliquant sur le bouton 'Demander une démo' en haut de la page. Notre équipe vous contactera sous 24h pour planifier une présentation personnalisée.";
      } else if (lowerInput.includes("chatbot") || lowerInput.includes("ia") || lowerInput.includes("automatisation")) {
        botResponse = "VoxFlow.ai propose des solutions d'automatisation complètes : chatbots IA, voix IA, automatisation des emails et messages sur WhatsApp, Instagram et Messenger. Quelle solution vous intéresse particulièrement ?";
      } else if (lowerInput.includes("whatsapp") || lowerInput.includes("instagram") || lowerInput.includes("messenger")) {
        botResponse = "Nous automatisons vos communications sur tous vos canaux : WhatsApp, Instagram Messenger et Facebook Messenger. L'IA répond instantanément 24/7 à vos clients avec un ton naturel et personnalisé.";
      } else if (lowerInput.includes("merci") || lowerInput.includes("thank")) {
        botResponse = "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider ! 😊";
      } else {
        botResponse = "Merci pour votre message ! Pour une réponse détaillée, je vous invite à demander une démo ou à nous contacter directement. Notre équipe d'experts sera ravie de répondre à toutes vos questions.";
      }

      addBotMessage(botResponse);
    }, 800);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow hover:shadow-accent-glow transition-all duration-300 hover:scale-110"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-card overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border/50 p-4 flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-foreground">Assistant VoxFlow.ai</h3>
                <p className="text-xs text-muted-foreground">En ligne • Répond en quelques secondes</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-border/50 p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-accent-glow transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
