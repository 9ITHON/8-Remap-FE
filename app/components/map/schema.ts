export interface MemorySchema {
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
  // 좌표 1번 (2개)
  {
    id: 'mem1-1',
    title: '1번째 기억',
    userName: '유저1',
    coordinates: { x: 37.41, y: 127.11 },
    createdAt: '2023-10-01T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem1-2',
    title: '2번째 기억',
    userName: '유저2',
    coordinates: { x: 37.41, y: 127.11 },
    createdAt: '2023-10-02T12:00:00Z',
    isPublic: true,
  },

  // 좌표 2번 (3개)
  {
    id: 'mem2-1',
    title: '3번째 기억',
    userName: '유저3',
    coordinates: { x: 37.394, y: 127.091 },
    createdAt: '2023-10-03T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem2-2',
    title: '4번째 기억',
    userName: '유저4',
    coordinates: { x: 37.394, y: 127.091 },
    createdAt: '2023-10-04T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem2-3',
    title: '5번째 기억',
    userName: '유저5',
    coordinates: { x: 37.394, y: 127.091 },
    createdAt: '2023-10-05T12:00:00Z',
    isPublic: true,
  },

  // 좌표 3번 (1개)
  {
    id: 'mem3-1',
    title: '6번째 기억',
    userName: '유저6',
    coordinates: { x: 37.409, y: 127.088 },
    createdAt: '2023-10-06T12:00:00Z',
    isPublic: true,
  },

  // 좌표 4번 (4개)
  {
    id: 'mem4-1',
    title: '7번째 기억',
    userName: '유저7',
    coordinates: { x: 37.39, y: 127.112 },
    createdAt: '2023-10-07T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem4-2',
    title: '8번째 기억',
    userName: '유저8',
    coordinates: { x: 37.39, y: 127.112 },
    createdAt: '2023-10-08T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem4-3',
    title: '9번째 기억',
    userName: '유저9',
    coordinates: { x: 37.39, y: 127.112 },
    createdAt: '2023-10-09T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem4-4',
    title: '10번째 기억',
    userName: '유저10',
    coordinates: { x: 37.39, y: 127.112 },
    createdAt: '2023-10-10T12:00:00Z',
    isPublic: true,
  },

  // 좌표 5번 (1개)
  {
    id: 'mem5-1',
    title: '11번째 기억',
    userName: '유저11',
    coordinates: { x: 37.393, y: 127.107 },
    createdAt: '2023-10-11T12:00:00Z',
    isPublic: true,
  },

  // 좌표 6번 (2개)
  {
    id: 'mem6-1',
    title: '12번째 기억',
    userName: '유저12',
    coordinates: { x: 37.411, y: 127.09 },
    createdAt: '2023-10-12T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem6-2',
    title: '13번째 기억',
    userName: '유저13',
    coordinates: { x: 37.411, y: 127.09 },
    createdAt: '2023-10-13T12:00:00Z',
    isPublic: true,
  },

  // 좌표 7번 (3개)
  {
    id: 'mem7-1',
    title: '14번째 기억',
    userName: '유저14',
    coordinates: { x: 37.3905, y: 127.095 },
    createdAt: '2023-10-14T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem7-2',
    title: '15번째 기억',
    userName: '유저15',
    coordinates: { x: 37.3905, y: 127.095 },
    createdAt: '2023-10-15T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem7-3',
    title: '16번째 기억',
    userName: '유저16',
    coordinates: { x: 37.3905, y: 127.095 },
    createdAt: '2023-10-16T12:00:00Z',
    isPublic: true,
  },

  // 좌표 8번 (1개)
  {
    id: 'mem8-1',
    title: '17번째 기억',
    userName: '유저17',
    coordinates: { x: 37.412, y: 127.113 },
    createdAt: '2023-10-17T12:00:00Z',
    isPublic: true,
  },

  // 좌표 9번 (2개)
  {
    id: 'mem9-1',
    title: '18번째 기억',
    userName: '유저18',
    coordinates: { x: 37.389, y: 127.102 },
    createdAt: '2023-10-18T12:00:00Z',
    isPublic: true,
  },
  {
    id: 'mem9-2',
    title: '19번째 기억',
    userName: '유저19',
    coordinates: { x: 37.389, y: 127.102 },
    createdAt: '2023-10-19T12:00:00Z',
    isPublic: true,
  },

  // 좌표 10번 (1개)
  {
    id: 'mem10-1',
    title: '20번째 기억',
    userName: '유저20',
    coordinates: { x: 37.413, y: 127.108 },
    createdAt: '2023-10-20T12:00:00Z',
    isPublic: true,
  },
];
