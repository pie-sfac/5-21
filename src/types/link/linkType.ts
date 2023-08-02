//pages/link
export interface LinkCartegoryType {
  id: number;
  title: string;
  description: string;
  totalCount: number;
}

// components/link
export interface LinkTabPropsType {
  isActiveTab: number;
  category: LinkCartegoryType;
}
export interface LinkTabContentType {
  isActiveTab: number;
  linkCategories: LinkCartegoryType[];
  allLinkData: getLinkDataType[];
}

export interface addLinkDataType {
  categoryId: number;
  url: string;
  title: string;
  description: string;
}

export interface getLinkDataType {
  id: number;
  centerId: number;
  category: {
    id: number;
    title: string;
    description: string;
  };
  site: string;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
