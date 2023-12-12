import { ILink } from "./models/link.model";

export enum MovieCategory {
  All = 'All',
  MostPopular = 'MostPopular',
  RecentlyReleased = 'RecentlyReleased'
}

const links: ILink[] = [
  {
    id: 1,
    linkUrl: 'https://www.facebook.com/',
    name: 'facebook'
  },
  {
    id: 2,
    linkUrl: 'https://www.linkedin.com/',
    name: 'linkedin'
  },
  {
    id: 3,
    linkUrl: 'https://www.twitter.com/',
    name: 'twitter'
  },
  {
    id: 4,
    linkUrl: 'https://www.instagram.com/',
    name: 'instagram'
  },
  {
    id: 5,
    linkUrl: 'https://www.youtube.com/',
    name: 'youtube'
  },
]

export default links;


