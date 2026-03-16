import { AgentKind } from '../shared/types/agent.types';

export interface RoutingDecision {
  primary: AgentKind;
  secondary?: AgentKind;
  reason: string;
}

const MULTIMODAL_PATTERN =
  /\b(generate|create|design|make|image|video|poster|storyboard|visual|thumbnail|reel)\b/i;

export const routeAgentTask = (userGoal: string): RoutingDecision => {
  // Multimodal generation explicit button trigger handles this now.
  // We no longer auto-route voice directly to generation to prevent spamming.

  return {
    primary: 'live-agent',
    reason: 'Realtime conversation request',
  };
};
