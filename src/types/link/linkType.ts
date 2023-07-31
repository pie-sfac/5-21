//pages/link
export interface LinkCartegoryType {
  id: number;
  title: string;
  description: string;
  totalCount: number;
}

// components/link
export interface LinkTabPropsType {
  setIsActiveTab: (num: number) => void;
  isActiveTab: number;
  linkCategories?: LinkCartegoryType[];
}
