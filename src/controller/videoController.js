export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => res.send("Watch");
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
