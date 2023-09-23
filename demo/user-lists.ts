export interface userListInterface {
  name: string;
  decription: string;
  owner: string;
  isPrivate: boolean;
  items?: string[];
  id: string;
}

export const userListTestData: userListInterface[] = [
  {
    name: 'A very long list name that will wrap to the next line and then some',
    decription: 'Was: Your favorite items',
    owner: '@user1',
    isPrivate: false,
    items: ['foo', 'bar', 'Flash'],
    id: '0',
  },
  {
    name: 'Silver age comics are the best',
    decription: 'List 1 description',
    owner: '@user1',
    isPrivate: true,
    items: ['Flash', 'Shadow', 'Spectre'],
    id: '1',
  },
  {
    name: 'Old reel leaders',
    decription: 'List 2 description',
    owner: '@user1',
    isPrivate: false,
    items: ['Bob', 'Betty', 'Bill'],
    id: '2',
  },
  {
    name: 'Microsoft stuff',
    decription: 'List 3 description',
    owner: '@user2',
    isPrivate: true,
    items: ['this', 'that', 'the other', 'Flash'],
    id: '3',
  },
  {
    name: 'Radio shows from the golden age of radio',
    decription: 'List 4 description',
    owner: '@user1',
    isPrivate: false,
    items: ['Shadow', 'Flash', 'Honeymooners'],
    id: '4',
  },
];
