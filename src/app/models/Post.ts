import { Comment } from "./Comment";
export class Post {
    constructor (
        public id: number,
        public title: string,
        public content: string,
        public blogId: number,
        public comments: Comment[]
    ){}
}