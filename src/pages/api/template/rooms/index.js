export default function handler(req, res) {
  res.status(200).json({
    templates: [
      {
        id: 1,
        theme_image_path:
          "https://www.nojima.co.jp/support/wp-content/uploads/2020/01/Photo-Tips-19.jpg",
        maximum_image: 300,
        created_at: "2022-05-12T12:32:36Z",
      },
      {
        id: 2,
        theme_image_path:
          "https://www.kyotango.gr.jp/wp-content/uploads/2021/02/9f25138071e8fdd5fd3776eab8137fb9.jpg",
        maximum_image: 300,
        created_at: "2022-05-12T12:32:36Z",
      },
      {
        id: 3,
        theme_image_path:
          "https://image.4meee.com/article/63418/25b8879a1cb85f23296e4b28bae3c191.jpg",
        maximum_image: 300,
        created_at: "2022-05-12T12:32:36Z",
      },
    ],
  });
}
