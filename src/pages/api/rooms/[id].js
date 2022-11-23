export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      id: "550e8400-e29b-41d4-a716-446655440000",
      themeImagePath: "/sample/images/tiger.jpg",
      numberOfImage: 0,
      maximumImage: 100,
      mosaicImagePath: "/sample/images/tiger.jpg",
      originalFlg: true,
      createdAt: "2022-05-12T12:32:36Z",
    });
  }
}
