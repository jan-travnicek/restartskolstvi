import { createContext, useContext, useState, type ReactNode } from "react";
import { audienceCopy, defaultAudience, getAudiencePillars, type Audience } from "@/lib/content";

const AudienceContext = createContext<{
  audience: Audience;
  setAudience: (audience: Audience) => void;
} | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>(defaultAudience);
  return <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) throw new Error("AudienceProvider is required");
  return { ...context, copy: audienceCopy[context.audience], pillars: getAudiencePillars(context.audience) };
}