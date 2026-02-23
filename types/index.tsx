export interface userProfile {
  id: string; //UUID
  profileName: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: number;
    linkedInUrl: string;
    gitHubUrl: string;
    portfolioUrl: string;
  };
  educationInfo: EducationProperty[];
  jobInformation: JobProperty[];
}

export interface EducationProperty{
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  isCurrentlyAttending: boolean;
  
}

export interface JobProperty{
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  currentJob: boolean
  jobDescription: string
}