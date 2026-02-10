

# ElevenLabs Voice Agent — Floating Orb Widget

## Overview

Add a floating voice chat orb in the bottom-right corner of the site that connects to your ElevenLabs agent (`agent_8601kh36e158f1mbhej72b4j154t`). Clicking the orb starts a real-time voice conversation; clicking again ends it. The orb will pulse/glow when the agent is speaking.

## What You'll See

- A gold-accented orb fixed to the bottom-right of every page
- Click it to start a voice conversation (browser will ask for microphone permission)
- The orb glows or pulses while the agent is speaking
- Click again to end the conversation
- Status text below the orb shows "Listening..." / "Speaking..." / idle

## Technical Details

### New dependency
- `@elevenlabs/react` — provides the `useConversation` hook for WebRTC voice

### New file: `src/components/VoiceAgentOrb.tsx`
- Uses `useConversation` from `@elevenlabs/react`
- Connects as a **public agent** using the agent ID directly (no API key or backend needed)
- Requests microphone permission on first click
- Renders a fixed-position circular button with Framer Motion animations:
  - Idle: subtle gold border glow
  - Connected + listening: steady gold glow
  - Speaking: pulsing gold ring animation
- Shows a small status label beneath the orb

### Modified: `src/App.tsx`
- Import and render `<VoiceAgentOrb />` inside the app layout (outside Routes) so it appears on every page

### No backend required
- Public agents connect directly with the agent ID via WebRTC
- If this doesn't work (agent requires auth), we'll add a Supabase Edge Function for token generation as a follow-up

