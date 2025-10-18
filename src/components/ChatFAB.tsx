import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import ChatPanel from "./ChatPanel";

const ChatFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleToggle = () => {
    setShowPreview(!showPreview);
    if (showPreview) {
      setIsOpen(false);
    }
  };

  const openFullChat = () => {
    setShowPreview(false);
    setIsOpen(true);
  };

  return (
    <>
      {/* Chat Preview Card */}
      {showPreview && !isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 shadow-2xl border-2 border-primary/20 animate-scale-in z-40">
          <div className="p-4 border-b bg-gradient-to-r from-primary to-primary/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AutoPR Assistant</h3>
                  <p className="text-xs text-white/90">How can we help?</p>
                </div>
              </div>
              <button 
                onClick={handleToggle}
                className="hover:bg-white/20 p-1 rounded transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="bg-muted rounded-2xl rounded-tl-none p-3">
              <p className="text-sm">
                👋 Hi! I'm your AutoPR assistant. Ready to transform your digital presence? Let's get started! 🚀
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Quick questions:</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-left" onClick={openFullChat}>
                  🌐 What services do you offer?
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-left" onClick={openFullChat}>
                  💼 How do I get started?
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-left" onClick={openFullChat}>
                  ⚡ What makes AutoPR different?
                </Button>
              </div>
            </div>
            
            <Button className="w-full shadow-lg bg-gradient-to-r from-primary to-primary/80" onClick={openFullChat}>
              Open Full Chat
            </Button>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-green-500 bg-[length:200%_200%] animate-gradient text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-50 group"
      >
        {showPreview ? (
          <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
        ) : (
          <>
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-xs font-bold animate-pulse text-secondary-foreground">
              1
            </div>
          </>
        )}
      </button>

      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatFAB;
