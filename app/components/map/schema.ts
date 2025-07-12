interface MemorySchema {
  id: string; // 기억의 고유 랜덤 ID
  title: string;
  userName: string; // id에 해당하는 유저의 이름
  coordinates: {
    x: number; // 위도
    y: number; // 경도
  };
  createdAt: string; // 기억이 생성된 날짜,
  isPublic: boolean; // 기억의 공개 여부
}

export const exampleMemory: MemorySchema[] = [
  {
    id: 'mem0',
    title: '첫 번째 기억',
    userName: '유저0',
    coordinates: { x: 37.402, y: 127.1002 }, // 서울 시청
    createdAt: '2023-10-01T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem1',
    title: '1번째 기억',
    userName: '유저1',
    coordinates: { x: 37.41, y: 127.11 }, // 북동쪽
    createdAt: '2023-10-01T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem2',
    title: '2번째 기억',
    userName: '유저2',
    coordinates: { x: 37.394, y: 127.091 }, // 남서쪽
    createdAt: '2023-10-02T12:00:00Z',
    isPublic: false,
  },
  {
    id: 'mem3',
    title: '3번째 기억',
    userName: '유저3',
    coordinates: { x: 37.409, y: 127.088 }, // 남동쪽
    createdAt: '2023-10-03T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem4',
    title: '4번째 기억',
    userName: '유저4',
    coordinates: { x: 37.39, y: 127.112 }, // 북서쪽
    createdAt: '2023-10-04T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem5',
    title: '5번째 기억',
    userName: '유저5',
    coordinates: { x: 37.393, y: 127.107 },
    createdAt: '2023-10-05T12:00:00Z',
    isPublic: false,
  },
  {
    id: 'mem6',
    title: '6번째 기억',
    userName: '유저6',
    coordinates: { x: 37.411, y: 127.09 },
    createdAt: '2023-10-06T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem7',
    title: '7번째 기억',
    userName: '유저7',
    coordinates: { x: 37.3905, y: 127.095 },
    createdAt: '2023-10-07T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem8',
    title: '8번째 기억',
    userName: '유저8',
    coordinates: { x: 37.412, y: 127.113 },
    createdAt: '2023-10-08T12:00:00Z',
    isPublic: false,
  },
  {
    id: 'mem9',
    title: '9번째 기억',
    userName: '유저9',
    coordinates: { x: 37.389, y: 127.102 },
    createdAt: '2023-10-09T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem10',
    title: '10번째 기억',
    userName: '유저10',
    coordinates: { x: 37.413, y: 127.108 },
    createdAt: '2023-10-10T12:00:00Z',
    isPublic: false,
  },
];
