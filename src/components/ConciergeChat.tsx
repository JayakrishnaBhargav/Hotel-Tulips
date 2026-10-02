import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, Bot, User, Loader2, ArrowRight } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

interface ConciergeChatProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
  onOpenEnquiry: () => void;
}

export default function ConciergeChat({
  onOpenBooking,
  onOpenReservation,
  onOpenEnquiry,
}: ConciergeChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Namaste & Welcome to Hotel Tulips Grand! I am your AI Hospitality Concierge. How may I assist you with our rooms, dining, or banquet spaces in Suraram, Hyderabad?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about the rooms & amenities",
    "What cuisines does your restaurant serve?",
    "Which banquet hall is best for a wedding?",
    "Where is the hotel located?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    const newHistory: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      if (data?.reply) {
        setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
      } else {
        throw new Error("No reply text returned");
      }
    } catch (err) {
      console.warn("Chat API unavailable, providing concierge fallback response:", err);
      // Fallback local concierge response for uninterrupted guest experience
      let fallback = "Hotel Tulips Grand in Suraram offers 38 modern guest rooms, authentic multi-cuisine family dining (Hyderabadi Dum Biryani, Mughlai, North Indian, Chinese), and 3 banquet halls (Vaibhavam, Amantran, Utsavam). You can click 'Book a Room' or 'Reserve a Table' directly on this page!";
      
      const lower = trimmed.toLowerCase();
      if (lower.includes("room") || lower.includes("stay") || lower.includes("price")) {
        fallback = "We feature Standard Rooms with City View (~280 sq.ft, King Bed) and Standard Twin Rooms (~250 sq.ft, twin beds), complete with private bathrooms, work desks, and open sit-out corners. You can explore our live verified listings via the 'Book Your Stay' button.";
      } else if (lower.includes("food") || lower.includes("restaurant") || lower.includes("menu") || lower.includes("biryani")) {
        fallback = "Our restaurant serves authentic Hyderabadi Dum Biryani, Mughlai kebabs, rich North Indian curries, and Chinese delicacies. Both Halal-certified non-vegetarian and pure vegetarian options are prepared daily!";
      } else if (lower.includes("banquet") || lower.includes("event") || lower.includes("wedding")) {
        fallback = "We host celebrations in three venues: Vaibhavam (flagship grand ballroom for weddings), Amantran (intimate milestone ceremonies), and Utsavam (corporate seminars & conclaves). Click 'Plan an Event' to get in touch with our event team.";
      } else if (lower.includes("where") || lower.includes("location") || lower.includes("address") || lower.includes("contact") || lower.includes("phone")) {
        fallback = "Hotel Tulips Grand is located at Block A, Merix Pride, 02-019/64, Suraram Village, 1, Hyderabad, Telangana 500055, near Malla Reddy Health City. You can call our concierge at +91 87120 16688 or reach us via WhatsApp at the same number.";
      }

      setMessages((prev) => [...prev, { role: "model", text: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Concierge Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-8 z-40 p-3.5 bg-[#1B1A17] border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#11110F] shadow-2xl transition-all duration-300 rounded-full flex items-center gap-2 group ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open AI Concierge Chat"
      >
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="text-xs uppercase tracking-wider font-medium hidden md:inline">
          AI Concierge
        </span>
      </button>

      {/* Slide-up Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 sm:right-8 z-50 w-[92vw] sm:w-[420px] h-[550px] bg-[#151412] border border-[#33312B] shadow-2xl flex flex-col overflow-hidden animate-fade-in"
          role="dialog"
          aria-label="Hotel Tulips Grand AI Concierge"
        >
          {/* Header */}
          <div className="p-4 bg-[#11110F] border-b border-[#252420] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B] flex items-center justify-center text-[#C6A15B]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-serif text-white uppercase tracking-wider">
                  Tulips Grand Concierge
                </h3>
                <div className="flex items-center space-x-1.5 text-[10px] text-[#25D366]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Gemini AI Connected</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#A7A39A] hover:text-white"
              aria-label="Close concierge"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#131210]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "model" && (
                  <div className="w-6 h-6 rounded-full bg-[#1F1E1A] border border-[#302D26] flex items-center justify-center text-[#C6A15B] shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#C6A15B] text-[#11110F] font-medium"
                      : "bg-[#1A1916] border border-[#2B2924] text-[#DED6C7]"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-[#2B2924] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-[#C6A15B] font-mono">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Concierge is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#11110F] border-t border-[#22211D] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider whitespace-nowrap bg-[#1A1916] hover:bg-[#C6A15B] hover:text-[#11110F] text-[#A7A39A] border border-[#282622] transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-[#11110F] border-t border-[#22211D] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rooms, dining, or banquets..."
              className="flex-1 bg-[#181714] border border-[#2B2924] px-3.5 py-2 text-xs text-white placeholder-[#78756E] focus:outline-none focus:border-[#C6A15B]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] disabled:opacity-50 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
