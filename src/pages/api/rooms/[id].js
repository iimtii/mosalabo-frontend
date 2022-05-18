export default function handler(req, res) {
  res.status(200).json({
    id: "550e8400-e29b-41d4-a716-446655440000",
    themeImagePath:
      "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cat.jpg",
    numberOfImage: 0,
    maximumImage: 250,
    mosaicImagePath:
      "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cat.jpg",
    createdAt: "2022-05-12T12:32:36Z",
  });
}
