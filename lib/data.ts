import { ShieldCheck, Bot, Activity, Hammer, AlertTriangle, Database, LogInIcon as Logs, Lock, Workflow } from 'lucide-react'

export const featureCards = [
  { icon: ShieldCheck, title: "Anti-Raid & Anti-Spam", description: "Detects mass joins and spam patterns, applies timeouts and bans automatically.", example: "/ban @raider wave" },
  { icon: Lock, title: "Role & Permission Safety", description: "Safeguards critical roles and audit changes to prevent hijacks.", example: "/roles lock @Admin" },
  { icon: Logs, title: "Advanced Logs", description: "Message edits/deletes, join/leave, role updates with granular filters." },
  { icon: AlertTriangle, title: "Incident Response", description: "Rapid response workflows for raids — lock channels, notify staff, enable slowmode." },
  { icon: Bot, title: "Custom Commands", description: "Slash commands and automations tailored to your server’s needs.", example: "/auto welcome set #introductions" },
  { icon: Workflow, title: "Automations", description: "Schedule announcements, assign roles, archive channels on inactivity." },
  { icon: Activity, title: "Insights", description: "Growth and engagement metrics to keep your community healthy." },
  { icon: Database, title: "Backups", description: "Export configs and restore in one click." },
  { icon: Hammer, title: "Moderation Suite", description: "Kick, ban, mute, warn with escalation and notes." },
]

export const plans = [
  { name: "Free", price: "$0", tagline: "Start secure, stay safe.", features: ["Core moderation", "Anti-spam", "Basic logs"], highlight: false, key: "free" },
  { name: "Pro", price: "$4.99/mo", tagline: "Advanced protection for growing servers.", features: ["Anti-raid", "Incident workflows", "Custom automations", "Priority queue"], highlight: true, key: "pro" },
  { name: "Enterprise", price: "Contact", tagline: "Tailored solutions and SLAs.", features: ["Dedicated support", "Onboarding", "Custom limits"], highlight: false, key: "enterprise" },
]

export const comparison = [
  { label: "Anti-spam", free: true, pro: true, enterprise: true },
  { label: "Anti-raid", free: false, pro: true, enterprise: true },
  { label: "Incident workflow", free: false, pro: true, enterprise: true },
  { label: "Advanced logs", free: false, pro: true, enterprise: true },
  { label: "SLA & onboarding", free: false, pro: false, enterprise: true },
]

export const faqs = [
  { q: "How do I invite ShieldX?", a: "Go to the Invite page and click 'Invite ShieldX'. Select your server and authorize the permissions." },
  { q: "What permissions are required?", a: "Admin is recommended for full functionality. You can limit permissions, but some features may not work." },
  { q: "Is there a free plan?", a: "Yes. Our Free plan includes core moderation and basic logging." },
  { q: "How do I get help?", a: "Open a ticket in our Discord or use the contact form on the Support page." },
]
