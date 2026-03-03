import { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const GATE_PASSWORD = "intinuous2026";
const STORAGE_KEY = "intinuous_app_auth";

interface PasswordGateProps {
  children: ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === GATE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 text-center">
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card">
            <Lock className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.15em" }}>
            INTINUOUS
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Enter password to access the dashboard</p>
        </div>
        <div className="space-y-3">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            className={error ? "border-destructive" : ""}
            autoFocus
          />
          {error && <p className="text-xs text-destructive-foreground">Incorrect password</p>}
          <Button type="submit" className="w-full">Enter</Button>
        </div>
      </form>
    </div>
  );
}
