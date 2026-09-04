import { Puzzle, Rocket, Terminal, User } from "lucide-react";

export const dashboardNav = [
  {
    to: "/session",
    label: "Session",
    icon: Terminal,
    description: "Create and connect sessions via QR or pairing code.",
    iconClass: "text-sky-400",
  },
  {
    to: "/deploy",
    label: "Deploy",
    icon: Rocket,
    description: "Trigger deployments and monitor release status.",
    iconClass: "text-emerald-400",
  },
  {
    to: "/plugin",
    label: "Plugin",
    icon: Puzzle,
    description: "Explore and manage your dashboard plugins.",
    iconClass: "text-violet-400",
  },
  {
    to: "/profile-picture",
    label: "Profile Picture",
    icon: User,
    description: "Pair your device and upload a profile image.",
    iconClass: "text-cyan-400",
  },
] as const;
