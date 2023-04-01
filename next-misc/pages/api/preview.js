export default function handler(req, res) {
  res.setPreviewData();
  res.setPreviewData({});
  res.redirect(req.query.redirect);
}
