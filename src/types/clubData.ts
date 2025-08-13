// Enhanced TypeScript interfaces for club data
export interface ClubInfo {
  name: string;
  shortName: string;
  established: string;
  description: string;
  logo: string;
  lastUpdated: string;
}

export interface Founder {
  id: string;
  name: string;
  image?: string;
  title: string;
  bio: string;
  email: string;
  linkedin?: string;
  department: string;
  joinedDate: string;
  status: 'active' | 'inactive' | 'alumni';
}

export interface Executive {
  id: string;
  name: string;
  image?: string;
  position: string;
  department: string;
  year: string;
  bio: string;
  email: string;
  linkedin?: string;
  achievements: string[];
  joinedDate: string;
  status: 'active' | 'inactive' | 'alumni';
  priority: number; // For ordering
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  icon: string;
  focus: string[];
  lead: string; // Executive ID
}

export interface Member {
  id: string;
  name: string;
  team: string; // Team ID
  role: string;
  year: string;
  department: string;
  email?: string;
  linkedin?: string;
  skills?: string[];
  avatar?: string;
  joinedDate: string;
  status: 'active' | 'inactive' | 'alumni';
  bio: string;
}

export interface TeamLead {
  id: string;
  name: string;
  image?: string;
  position: string;
  department: string;
  year: string;
  bio: string;
  email: string;
  linkedin?: string;
  achievements: string[];
  joinedDate: string;
  status: 'active' | 'inactive' | 'alumni';
  priority: number;
}

export interface Statistics {
  totalMembers: number;
  totalExecutives: number;
  totalTeamLeads?: number;
  totalTeams: number;
  activeProjects: number;
  completedProjects: number;
  eventsOrganized: number;
  lastUpdated: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

export interface ClubData {
  club: ClubInfo;
  timeline: TimelineEvent[];
  founder: Founder;
  executives: Executive[];
  teamLeads?: TeamLead[];
  teams: Team[];
  members?: Member[];
  _members?: Member[]; // For commented out members
  _members_commented?: string; // Comment about members section
  statistics: Statistics;
}

// Utility types for filtering and sorting
export type MemberStatus = 'active' | 'inactive' | 'alumni';
export type YearLevel = 'First Year' | 'Second Year' | 'Third Year' | 'Final Year';
export type SortKey = 'name' | 'team' | 'year' | 'role' | 'joinedDate';
