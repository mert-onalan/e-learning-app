export type ComponentType = 'LEARNING_PATH' | 'COURSE' | 'MEDIA';

export const COMPONENT_TYPE_LABELS: Record<ComponentType, string> = {
  LEARNING_PATH: 'Learning Path',
  COURSE: 'Course',
  MEDIA: 'Media',
};

export interface IComponentItem {
  id: number;
  name: string;
  subtitle: string;
  type: ComponentType;
  image: string;
  progress: number;
}

export interface IMainPageData {
  contents: IComponentItem[];
  count: number;
}

export interface IDescriptionDataItem {
  name: string;
  content: string;
}

export interface IComponentDetailsData {
  name: string;
  description_data: IDescriptionDataItem[];
  language: string;
  startDate: string;
  endDate: string;
  learningForm: string;
  image: string;
}