export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      id: "550e8400-e29b-41d4-a716-446655440000",
      themeImagePath: `${req.themeImagePath}`,
      numberOfOmage: 0,
      maximumImage: 300,
      mosaicImagePath: null,
      createdAt: "2022-05-12T12:32:36Z",
    });
  }
}
