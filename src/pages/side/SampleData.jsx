export const SampleData = [
  {
    id: 1,
    name: "관리",
    isCategory: true,
    image: "",
    children: [
      {
        id: 2,
        parenId: 1,
        name: "수신자료관리",
        isCategory: false,
        to: "",
        image: "",
      },
      {
        id: 3,
        parenId: 1,
        name: "송신자료관리",
        isCategory: false,
        to: "",
        image: "",
      },
    ],
  },
  {
    id: 2,
    name: "관리2",
    isCategory: true,
    image: "",
    children: [
      {
        id: 4,
        parenId: 2,
        name: "송신자료관리",
        isCategory: true,
        image: "",
        children: [
          {
            id: 10,
            parenId: 4,
            name: "테스트",
            isCategory: false,
            to: "",
            image: "",
          },
        ],
      },
    ],
  },
];
