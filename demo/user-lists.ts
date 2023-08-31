export interface userListInterface {
  name: string;
  decription: string;
  owner: string;
  isPrivate: boolean;
  itemCount?: number;
  id: string;
}

export const userListTestData: userListInterface[] = [
  {
    name: 'Silver age comics are the best',
    decription: 'List 1 description',
    owner: '@user1',
    isPrivate: true,
    itemCount: 12,
    id: '1',
  },
  {
    name: 'Old reel leaders',
    decription: 'List 2 description',
    owner: '@user1',
    isPrivate: false,
    itemCount: 0,
    id: '2',
  },
  {
    name: 'Microsoft stuff',
    decription: 'List 3 description',
    owner: '@user2',
    isPrivate: true,
    itemCount: 5,
    id: '3',
  },
  {
    name: 'Radio shows from the golden age of radio',
    decription: 'List 4 description',
    owner: '@user1',
    isPrivate: false,
    itemCount: 133,
    id: '4',
  },
];
