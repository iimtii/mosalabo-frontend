export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      templates: [
        {
          id: 1,
          themeImagePath: "/sample/images/tiger.jpg",
          iconImagePath: "/sample/images/tiger.jpg",
          maximumImage: 300,
          createdAt: "2022-05-12T12:32:36Z",
        },
        {
          id: 2,
          themeImagePath: "/sample/images/dogs.jpg",
          iconImagePath: "/sample/images/dogs.jpg",
          maximumImage: 300,
          created_at: "2022-05-12T12:32:36Z",
        },
        {
          id: 3,
          themeImagePath: "/sample/images/giraff.jpg",
          iconImagePath: "/sample/images/giraff.jpg",
          maximumImage: 300,
          createdAt: "2022-05-12T12:32:36Z",
        },
        {
          id: 4,
          themeImagePath: "/sample/images/squirrel.jpg",
          iconImagePath: "/sample/images/squirrel.jpg",
          maximumImage: 300,
          createdAt: "2022-05-12T12:32:36Z",
        },
      ],
    });
  } else if (req.method === "POST") {
    res.status(200).json({
      uuid: "550e8400-e29b-41d4-a716-446655440000",
    });
  }
}
