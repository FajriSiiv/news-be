import News from "../models/News.js";

export const getNews = async (req, res) => {
  try {
    const NewsCheck = await News.find();
    res.send(NewsCheck);
  } catch (error) {
    console.log(error.message);
  }
};

export const getNewsById = async (req, res) => {
  const NewsCheck = await News.findById({ _id: req.params.id });
  if (!NewsCheck)
    res.status(404).json({ msg: "Tidak ada berita yang anda cari" });

  try {
    const NewsCheck = await News.findById({ _id: req.params.id });
    res.send(NewsCheck);
  } catch (error) {
    console.log(error.message);
  }
};

export const createNews = async (req, res) => {
  const { headline, comments } = req.body;

  const createNews = new News({
    headline: headline,
    comments: comments,
  });

  try {
    const news = await createNews.save();

    res.send(news);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateNews = async (req, res) => {
  const NewsCheck = await News.findById({ _id: req.params.id });
  if (!NewsCheck)
    res.status(404).json({ msg: "Tidak ada berita yang anda cari" });

  try {
    await News.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ msg: "Success Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNews = async (req, res) => {
  const NewsCheck = await News.findById({ _id: req.params.id });
  if (!NewsCheck)
    res.status(404).json({ msg: "Tidak ada berita yang anda cari" });

  try {
    await News.deleteOne({ _id: req.params.id }, { $set: req.body });

    res.status(204).json({ msg: "Success Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
