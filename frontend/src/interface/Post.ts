export interface Post {
  id: string,
  title: string,
  text: string,
  author: {
    name: string,
  }
}