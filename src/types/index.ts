export type PostType = {
  id: string;
  date: { start_date: string };
  type: string[];
  slug: string;
  tags?: string[];
  summary?: string;
  author?: {
    id: string;
    name: string;
    profile_photo: string;
  }[];
  title: string;
  status: string[];
  createdTime: string;
  fullWidth: boolean;
  thumbnail?: string;
};

export type PostArrayType = PostType[];

export type TagType = {
  [tagName: string]: number;
};

export type ThemeType = 'dark' | 'light';
