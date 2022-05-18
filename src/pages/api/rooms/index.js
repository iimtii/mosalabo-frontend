export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      id: "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cat.jpg",
      themeImagePath: `${req.themeImagePath}`,
      numberOfOmage: 0,
      maximumImage: 300,
      mosaicImagePath: null,
      createdAt: "2022-05-12T12:32:36Z",
    });
  }
}
