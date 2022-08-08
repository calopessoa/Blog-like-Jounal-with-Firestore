export default class Post {
  public id?: string;
  public title: string;
  public text: string;
  public author: string;

  constructor(id: string, title: string, text: string, author: string) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.author = author;
  }
}
