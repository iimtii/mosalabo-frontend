export default function handler(req, res) {
  res.status(200).json({
    templates: [
      {
        id: 1,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cat.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cat-Icon.png",
        maximumImage: 300,
        createdAt: "2022-05-12T12:32:36Z",
      },
      {
        id: 2,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/DisneyLand.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Disney-Icon.png",
        maximumImage: 300,
        created_at: "2022-05-12T12:32:36Z",
      },
      {
        id: 3,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Ken.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Ken-Icon.png",
        maximumImage: 300,
        createdAt: "2022-05-12T12:32:36Z",
      },
      {
        id: 4,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Kosuke.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Kosuke-Icon.png",
        maximumImage: 300,
        createdAt: "2022-05-12T12:32:36Z",
      },
      {
        id: 5,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cherry.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Cherry-Icon.png",
        maximumImage: 300,
        createdAt: "2022-05-12T12:32:36Z",
      },
      {
        id: 6,
        themeImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Origami.jpg",
        iconImagePath:
          "https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Origami-Icon.png",
        maximumImage: 300,
        createdAt: "2022-05-12T12:32:36Z",
      },
    ],
  });
}
