export type Contractor = {
  id: string;
  name: string;
  slug: string;
  trade: string;
  city: string;
  state: string;
};

export type SafetyGrade = {
  grade: string;
  risk: string;
  citations: number;
  seriousViolations: number;
  percentile: number;
};

export type Violation = {
  id: string;
  date: string;
  type: string;
  severity: string;
};