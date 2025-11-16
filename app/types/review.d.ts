export interface ReviewData {
  id?: number;
  title: string;
  content: string;
  department: string;
  studentId: string;
  name: string;
  createdAt?: string;
}

export interface PaginationInfo {
  page: number;
  totalPages: number;
  totalCount: number;
  limit: number;
}

export interface ReviewsResponse {
  reviews: ReviewData[];
  pagination: PaginationInfo;
}
