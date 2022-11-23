export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      uuid: "550e8400-e29b-41d4-a716-446655440000",
      themeImagePath: "/sample/images/tiger.jpg",
      numberOfImage: 22,
      maximumImage: 100,
      mosaicImagePath: "/sample/images/tiger.jpg",
      originalFlg: true,
      createdAt: "2022-05-12T12:32:36Z",
    });
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
