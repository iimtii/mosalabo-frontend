export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      images: [
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
        {
          path: "/sample/images/dogs.jpg",
        },
      ],
    });
  }
}
