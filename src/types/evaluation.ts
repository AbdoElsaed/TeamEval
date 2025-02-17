export type Role = 'engineer' | 'designer' | 'product-owner';

export interface TeamMember {
  name: string;
  email: string;
  role: Role;
}

export interface BehavioralEvaluation {
  selfAppraisal: {
    keyAchievementsAndChallenges?: string;
    areasOfExcellenceAndGrowth?: string;
    contributionToTeam?: string;
  };
  managerReview: {
    alignmentWithGoals?: string;
    strengthsAndImprovements?: string;
    feedbackHandling?: string;
  };
  peerReview: {
    collaborationAndCommunication?: string;
    teamDynamicsImpact?: string;
    constructiveCriticismHandling?: string;
    crossRoleFeedback?: string;
  };
  teamwork: {
    conflictHandling?: string;
    collaborationExample?: string;
  };
  leadership: {
    leadershipDemonstration?: string;
    initiativeExample?: string;
    mentorship?: string;
  };
  ownership: {
    taskOwnership?: string;
    extraMileExample?: string;
    accountabilityHandling?: string;
  };
  responsibility: {
    priorityManagement?: string;
  };
  achievements: {
    proudestAchievements?: string;
    contributionImpact?: string;
    recognitionApproach?: string;
  };
  improvements: {
    focusAreas?: string;
    actionSteps?: string;
    supportNeeded?: string;
  };
}

export interface EngineerTechnicalEvaluation {
  codeQuality: {
    codeReadability?: string;
    codeReusability?: string;
    feedbackIncorporation?: string;
  };
  speedOfWork: {
    deadlineMeeting?: string;
    issueResolution?: string;
    reworkFrequency?: string;
  };
  bugMetrics: {
    postReleaseBugs?: string;
    bugResolutionTime?: string;
    bugPreventionSteps?: string;
  };
}

export interface DesignerTechnicalEvaluation {
  quality: {
    uiConsistency?: string;
    accessibilityStandards?: string;
    feedbackIncorporation?: string;
  };
  usabilityAndUX: {
    userFriendliness?: string;
    usabilityValidation?: string;
    aestheticsBalance?: string;
  };
  collaboration: {
    engineerCollaboration?: string;
    specificationClarity?: string;
    modificationResponse?: string;
  };
}

export interface ProductOwnerTechnicalEvaluation {
  backlogManagement: {
    prioritization?: string;
    refinementSessions?: string;
    businessAlignment?: string;
  };
  requirementsManagement: {
    requirementsCommunication?: string;
    stakeholderFeedback?: string;
    technicalBusinessBalance?: string;
  };
  deliveryAndImpact: {
    roadmapAdjustment?: string;
    timelyDelivery?: string;
    featureImpactAnalysis?: string;
  };
}

export interface Evaluation {
  teamMember: TeamMember;
  behavioral: BehavioralEvaluation;
  technical:
    | EngineerTechnicalEvaluation
    | DesignerTechnicalEvaluation
    | ProductOwnerTechnicalEvaluation;
} 