export interface Material {
  id: string;
  title: string;
  type: "online" | "onsite";
  url: string;
  isRequired: boolean;
  startDate: string;
  durationInMinutes: number;
  isDownloadable: boolean;
}

export interface Session {
  title: string;
  materials: Material[];
}

export interface Curriculum {
  sessions: Session[];
}

export interface Event {
  id: string;
  title: string;
  startDate: string;
  curriculum: Curriculum;
  updatedAt: string;
  createdAt: string;
}
