export type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
}

export type Post = {
  id: number;
  title: string,
  thumbnail: string,
  content: string
}

export type Query = {
  allCourses: Course[];
  allPosts: Post[];
}
