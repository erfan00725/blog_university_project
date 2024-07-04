export type ApiResponseType<response> = {
  data: response;
  links?: any;
  meta?: any;
};

export type PostType = {
  id: number;
  title: string;
  description: string;
  body?: string;
  image_path?: string;
  comments: CommentsType[];
  comments_count?: number;
  likes?: number;
  isLiked?: boolean;
  created_at?: string;
};

export type CommentsType = {
  id: number;
  post_id: number;
  content?: string;
  email: string;
  user_name: string;
  created_at: string;
};
