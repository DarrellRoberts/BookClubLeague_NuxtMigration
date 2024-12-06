import { type Book } from "./Book"

export type Club = {
    avatar: {
      background: {
        image: string,
        color: string
      },
      figure: {
        image: string,
        color: string
      },
      color: string
    },
    _id: string,
    name: string,
    owner: string,
    members: string[],
    dateFormed: string,
    booksScored: Book[],
    website: string,
    tagline: string,
};
