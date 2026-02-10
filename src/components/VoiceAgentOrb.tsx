import { useEffect } from "react";

const AGENT_ID = "agent_8601kh36e158f1mbhej72b4j154t";

const VoiceAgentOrb = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="${AGENT_ID}" avatar-orb-color-1="#D7B25A" avatar-orb-color-2="#080808"></elevenlabs-convai>`,
      }}
    />
  );
};

export default VoiceAgentOrb;
