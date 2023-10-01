import { Event, Material, Session } from "@/domains/events/models";

export interface CurriculumScheduleProps {
  schedule: string;
}

export interface CurriculumSessionProps {
  session: Session;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  draggable: boolean;
  $isDragging: boolean;
}

export interface EventCurriculumContentProps {
  event: Event;
}

export interface CurriculumSessiomMaterialProps {
  material: Material;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  draggable: boolean;
  $isDragging: boolean;
}
