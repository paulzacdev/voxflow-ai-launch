import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Phone, PhoneOff, Mic, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
  const [isCallActive, setIsCallActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
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

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const history = [...messages, userMessage].map((m) => ({
      role: m.sender === "user" ? "user" : "assistant",
      content: m.text,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ messages: history }),
        },
      );

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          toast({ title: "Trop de requêtes", description: "Réessayez dans un instant.", variant: "destructive" });
        } else if (resp.status === 402) {
          toast({ title: "Crédits IA épuisés", description: "Ajoutez des crédits Lovable AI.", variant: "destructive" });
        } else {
          toast({ title: "Erreur", description: "Impossible de contacter l'assistant.", variant: "destructive" });
        }
        setIsTyping(false);
        return;
      }

      const botId = (Date.now() + 1).toString();
      let assistantText = "";
      let created = false;

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantText += content;
              if (!created) {
                created = true;
                setIsTyping(false);
                setMessages((prev) => [
                  ...prev,
                  { id: botId, text: assistantText, sender: "bot", timestamp: new Date() },
                ]);
              } else {
                setMessages((prev) =>
                  prev.map((m) => (m.id === botId ? { ...m, text: assistantText } : m)),
                );
              }
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
      setIsTyping(false);
    } catch (err) {
      console.error("Chat error:", err);
      setIsTyping(false);
      toast({ title: "Erreur", description: "Connexion impossible.", variant: "destructive" });
    }
  };

  const handleStartCall = useCallback(async () => {
    setIsConnecting(true);
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // TODO: User will configure their ElevenLabs agent ID here
      // For now, show a toast indicating the call feature is ready to be configured
      toast({
        title: "Agent vocal IA",
        description: "Configurez votre agent ElevenLabs pour activer les appels vocaux.",
      });
      
      setIsCallActive(true);
      addBotMessage("🎙️ Appel vocal activé ! Parlez maintenant, notre agent IA vous écoute...");
      
    } catch (error) {
      console.error("Error starting call:", error);
      toast({
        title: "Accès au microphone requis",
        description: "Veuillez autoriser l'accès au microphone pour passer un appel.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  }, [toast]);

  const handleEndCall = useCallback(() => {
    setIsCallActive(false);
    addBotMessage("📞 Appel terminé. Merci d'avoir utilisé notre assistant vocal !");
    toast({
      title: "Appel terminé",
      description: "Votre conversation vocale a été terminée.",
    });
  }, [toast]);

  return (
    <>
      {/* Bouton flottant futuriste */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Orbiting particles */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-accent rounded-full" />
            <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-16 w-16 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent border border-white/20 shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:scale-110 overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full" />
            
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <X className="w-7 h-7 text-white drop-shadow-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <MessageCircle className="w-7 h-7 text-white drop-shadow-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>

      {/* Fenêtre de chat futuriste */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 z-50 w-[380px] h-[580px] overflow-hidden flex flex-col"
          >
            {/* Glassmorphism container */}
            <div className="relative h-full w-full rounded-3xl bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Header futuriste */}
              <div className="relative border-b border-white/10 p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar animé */}
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-md opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                        <div className="w-full h-full rounded-[10px] bg-background/90 flex items-center justify-center">
                          <Bot className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      {/* Status indicator */}
                      <motion.div
                        className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        VoxFlow AI
                        <Sparkles className="w-4 h-4 text-accent" />
                      </h3>
                      <p className="text-xs text-muted-foreground">Assistant intelligent • En ligne</p>
                    </div>
                  </div>

                  {/* Bouton d'appel */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {!isCallActive ? (
                      <Button
                        onClick={handleStartCall}
                        disabled={isConnecting}
                        size="sm"
                        className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl px-4 h-10 shadow-lg shadow-green-500/25"
                      >
                        {isConnecting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Mic className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <>
                            <Phone className="w-4 h-4 mr-2" />
                            Appeler
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        onClick={handleEndCall}
                        size="sm"
                        className="relative bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl px-4 h-10 animate-pulse shadow-lg shadow-red-500/25"
                      >
                        <PhoneOff className="w-4 h-4 mr-2" />
                        Raccrocher
                      </Button>
                    )}
                  </motion.div>
                </div>
                
                {/* Call status indicator */}
                <AnimatePresence>
                  {isCallActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-green-500/10 border border-green-500/20"
                    >
                      <motion.div
                        className="flex gap-1"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-green-500 rounded-full"
                            animate={{ height: [8, 16, 8] }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </motion.div>
                      <span className="text-xs text-green-500 font-medium">Appel en cours...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Messages */}
              <div className="relative flex-1 overflow-y-auto p-4 space-y-4 h-[360px]">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20"
                          : "bg-white/5 border border-white/10 text-foreground backdrop-blur-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                            animate={{
                              y: [0, -8, 0],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input futuriste */}
              <form onSubmit={handleSendMessage} className="relative border-t border-white/10 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                
                <div className="relative flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Écrivez votre message..."
                      className="w-full bg-white/5 border-white/10 rounded-xl pl-4 pr-4 h-12 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </Button>
                  </motion.div>
                </div>
              </form>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
