export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      id: "550e8400-e29b-41d4-a716-446655440000",
      theme_image_path: `${req.theme_image_path}`,
      number_of_image: 0,
      maximum_image: 300,
      mosaic_image_path: null,
      created_at: "2022-05-12T12:32:36Z",
    });
  }
}
