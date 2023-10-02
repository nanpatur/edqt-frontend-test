import { Event, Material, Session } from "@/domains/events/models";

export interface CurriculumScheduleProps {
  schedule: string;
}

export interface CurriculumSessionProps {
  event: Event;
  updateEvent: (event: Event) => void;
  session: Session;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  draggable: boolean;
  $isDragging: boolean;
  handleDeleteSession: (sessionId: string) => void;
}

export interface EventCurriculumContentProps {
  event: Event;
  updateEvent: (event: Event) => void;
  refetchEvent: () => void;
}

export interface CurriculumSessiomMaterialProps {
  material: Material;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  draggable: boolean;
  $isDragging: boolean;
}

export interface CurriculumSessionMaterialModalProps {
  isOpen: boolean;
  onOK: (values?: any) => void;
  onCancel: () => void;
  session: Session;
}
