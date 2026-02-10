import { useConversation } from "@elevenlabs/react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff } from "lucide-react";

const AGENT_ID = "agent_8601kh36e158f1mbhej72b4j154t";

const VoiceAgentOrb = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("ElevenLabs agent connected"),
    onDisconnect: () => console.log("ElevenLabs agent disconnected"),
    onError: (error) => console.error("ElevenLabs error:", error),
  });

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  const handleClick = useCallback(async () => {
    if (isConnected) {
      await conversation.endSession();
      return;
    }

    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    } finally {
      setIsConnecting(false);
    }
  }, [isConnected, conversation]);

  const statusText = isConnecting
    ? "Connecting..."
    : isSpeaking
    ? "Speaking..."
    : isConnected
    ? "Listening..."
    : "";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {/* Status label */}
      <AnimatePresence>
        {statusText && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="text-xs font-mono text-primary/80 select-none"
          >
            {statusText}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Orb button */}
      <div className="relative">
        {/* Pulsing ring when speaking */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-primary"
            />
          )}
        </AnimatePresence>

        {/* Steady glow when connected */}
        {isConnected && !isSpeaking && (
          <div className="absolute inset-[-4px] rounded-full bg-primary/20 blur-md" />
        )}

        <motion.button
          onClick={handleClick}
          disabled={isConnecting}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-colors
            ${isConnected
              ? "bg-primary text-primary-foreground glow-gold"
              : "bg-card border border-border hover:border-primary/50 text-primary"
            }
            disabled:opacity-50`}
        >
          {isConnected ? (
            <MicOff className="w-5 h-5" />
          ) : (
            <Mic className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default VoiceAgentOrb;
