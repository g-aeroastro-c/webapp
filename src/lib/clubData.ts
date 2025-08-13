import { ClubData, Member, Executive, Team, TeamLead, MemberStatus, YearLevel, SortKey } from '@/types/clubData';
import clubDataRaw from '@/data/clubData.json';

// Cast the imported JSON to our typed interface
export const clubData = clubDataRaw as ClubData;

// Utility functions for working with club data
export class ClubDataUtils {
  
  // Get all active members (handle optional members)
  static getActiveMembers(): Member[] {
    if (!clubData.members) return [];
    return clubData.members.filter(member => member.status === 'active');
  }

  // Get all active executives
  static getActiveExecutives(): Executive[] {
    return clubData.executives
      .filter(exec => exec.status === 'active')
      .sort((a, b) => a.priority - b.priority);
  }

  // Get all active team leads
  static getActiveTeamLeads(): TeamLead[] {
    if (!clubData.teamLeads) return [];
    return clubData.teamLeads
      .filter(lead => lead.status === 'active')
      .sort((a, b) => a.priority - b.priority);
  }

  // Get members by team ID (handle optional members)
  static getMembersByTeam(teamId: string): Member[] {
    if (!clubData.members) return [];
    return clubData.members.filter(member => 
      member.team === teamId && member.status === 'active'
    );
  }

  // Get team information by ID
  static getTeamById(teamId: string): Team | undefined {
    return clubData.teams.find(team => team.id === teamId);
  }

  // Get team lead (executive or team lead) for a team
  static getTeamLead(teamId: string): Executive | TeamLead | undefined {
    const team = this.getTeamById(teamId);
    if (!team) return undefined;
    
    // First check if it's an executive
    const executive = clubData.executives.find(exec => exec.id === team.lead);
    if (executive) return executive;
    
    // Then check if it's a team lead
    if (clubData.teamLeads) {
      return clubData.teamLeads.find(lead => lead.id === team.lead);
    }
    
    return undefined;
  }

  // Filter members by multiple criteria (handle optional members)
  static filterMembers(filters: {
    search?: string;
    team?: string;
    year?: string;
    status?: MemberStatus;
  }): Member[] {
    if (!clubData.members) return [];
    
    let filtered = clubData.members;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(searchLower) ||
        member.role.toLowerCase().includes(searchLower) ||
        member.department.toLowerCase().includes(searchLower)
      );
    }

    if (filters.team && filters.team !== 'All') {
      filtered = filtered.filter(member => member.team === filters.team);
    }

    if (filters.year && filters.year !== 'All') {
      filtered = filtered.filter(member => member.year === filters.year);
    }

    if (filters.status) {
      filtered = filtered.filter(member => member.status === filters.status);
    }

    return filtered;
  }

  // Sort members by different criteria
  static sortMembers(members: Member[], sortKey: SortKey): Member[] {
    return [...members].sort((a, b) => {
      switch (sortKey) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'team':
          const teamA = this.getTeamById(a.team)?.name || '';
          const teamB = this.getTeamById(b.team)?.name || '';
          return teamA.localeCompare(teamB);
        case 'year':
          return a.year.localeCompare(b.year);
        case 'role':
          return a.role.localeCompare(b.role);
        case 'joinedDate':
          return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
        default:
          return 0;
      }
    });
  }

  // Get unique values for filters
  static getUniqueTeams(): Team[] {
    return clubData.teams;
  }

  static getUniqueYears(): YearLevel[] {
    if (!clubData.members) return [];
    const years = [...new Set(clubData.members.map(m => m.year as YearLevel))];
    const yearOrder: YearLevel[] = ['First Year', 'Second Year', 'Third Year', 'Final Year'];
    return yearOrder.filter(year => years.includes(year));
  }

  static getUniqueDepartments(): string[] {
    const memberDepts = clubData.members ? clubData.members.map(m => m.department) : [];
    return [...new Set([
      ...memberDepts,
      ...clubData.executives.map(e => e.department)
    ])].sort();
  }

  // Get statistics
  static getStatistics() {
    return clubData.statistics;
  }

  // Get paginated results
  static paginateMembers(members: Member[], page: number, pageSize: number) {
    const totalPages = Math.ceil(members.length / pageSize) || 1;
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, members.length);
    
    return {
      data: members.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: members.length,
        itemsPerPage: pageSize,
        startIndex: startIndex + 1,
        endIndex,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  }

  // Search functionality with multiple fields (handle optional members)
  static searchMembers(query: string): Member[] {
    if (!clubData.members) return [];
    if (!query.trim()) return this.getActiveMembers();
    
    const searchTerms = query.toLowerCase().split(' ');
    
    return clubData.members.filter(member => {
      const searchableText = [
        member.name,
        member.role,
        member.department,
        member.year,
        ...(member.skills || []),
        this.getTeamById(member.team)?.name || ''
      ].join(' ').toLowerCase();
      
      return searchTerms.every(term => searchableText.includes(term));
    });
  }

  // Get member details with team information (handle optional members)
  static getMemberWithTeamInfo(memberId: string) {
    if (!clubData.members) return null;
    const member = clubData.members.find(m => m.id === memberId);
    if (!member) return null;
    
    const team = this.getTeamById(member.team);
    const teamLead = team ? this.getTeamLead(team.id) : undefined;
    
    return {
      ...member,
      teamInfo: team,
      teamLead
    };
  }

  // Helper to get display-friendly team name
  static getTeamDisplayName(teamId: string): string {
    const team = this.getTeamById(teamId);
    return team ? team.shortName : 'Unknown Team';
  }

  // Helper to get team colors
  static getTeamColors(teamId: string) {
    const team = this.getTeamById(teamId);
    return team ? team.color : {
      primary: '#6B7280',
      secondary: '#9CA3AF',
      gradient: 'from-gray-500 to-gray-600'
    };
  }

  // Role-based styling for executives
  static getExecutiveRoleStyle(position: string) {
    const roleStyles: Record<string, { gradient: string; ring: string; icon: string }> = {
      'President': { gradient: 'from-yellow-500 via-amber-400 to-orange-500', ring: 'ring-yellow-400/60', icon: '👑' },
      'Vice President': { gradient: 'from-purple-500 via-fuchsia-500 to-pink-500', ring: 'ring-fuchsia-400/60', icon: '⭐' },
      'Vice President (Operations and Outreach)': { gradient: 'from-purple-500 via-fuchsia-500 to-pink-500', ring: 'ring-fuchsia-400/60', icon: '⭐' },
      'Vice President (Technical Affairs)': { gradient: 'from-emerald-500 via-green-500 to-teal-500', ring: 'ring-emerald-400/60', icon: '⚙️' },
      'Technical Lead': { gradient: 'from-emerald-500 via-green-500 to-teal-500', ring: 'ring-emerald-400/60', icon: '⚙️' },
      'Secretary': { gradient: 'from-blue-500 via-cyan-500 to-sky-500', ring: 'ring-sky-400/60', icon: '📧' },
      'Treasurer': { gradient: 'from-indigo-500 via-blue-600 to-violet-600', ring: 'ring-indigo-400/60', icon: '💰' },
      'Events Coordinator': { gradient: 'from-teal-500 via-cyan-500 to-emerald-500', ring: 'ring-teal-400/60', icon: '📅' },
    };
    
    return roleStyles[position] || {
      gradient: 'from-gray-500 to-gray-600',
      ring: 'ring-gray-400/60',
      icon: '👤'
    };
  }

  // Data validation helpers
  static validateMemberData(member: Partial<Member>): string[] {
    const errors: string[] = [];
    
    if (!member.name?.trim()) errors.push('Name is required');
    if (!member.email?.trim()) errors.push('Email is required');
    if (!member.team) errors.push('Team is required');
    if (!member.role?.trim()) errors.push('Role is required');
    if (!member.year) errors.push('Year is required');
    if (!member.department?.trim()) errors.push('Department is required');
    
    return errors;
  }

  // Export data for backup/migration
  static exportData() {
    return {
      ...clubData,
      exportedAt: new Date().toISOString(),
      version: '1.0'
    };
  }
}

// Hook for React components (if using React hooks)
export function useClubData() {
  return {
    clubInfo: clubData.club,
    founder: clubData.founder,
    executives: ClubDataUtils.getActiveExecutives(),
    teamLeads: ClubDataUtils.getActiveTeamLeads(),
    teams: clubData.teams,
    members: ClubDataUtils.getActiveMembers(),
    timeline: clubData.timeline,
    statistics: clubData.statistics,
    utils: ClubDataUtils
  };
}

// Export the raw data for direct access
export { clubData as default };
export * from '@/types/clubData';
