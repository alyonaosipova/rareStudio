const router = require("express").Router();
const { Service } = require("../../db/models");

router.get("/user/services", async (req, res) => {
  const services = await Service.findAll({
    attributes: [title, description, price],
  });
  res.json({ services });
});

router.get("/admin/services", async (req, res) => {
  const services = await Service.findAll();
  res.json({ services });
});

router.post("/admin/newServices", async (req, res) => {
  try {
    const { title, description, price, userId } = req.body;
    if (title && description && price && userId) {
      const newService = await Service.create({
        title,
        description,
        price,
        userId,
        categoriesId: 1, // TODO delete
      });
      res.json({ message: "ok", service: newService });
    } else {
      res.status(400).json({ message: "азполните все поля" });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete("/admin/delServices/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.destroy({ where: { id } });
    if (result) {
      res.json({ id: +id });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/admin/services/:id/", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    if (title && description && price) {
      const result = Service.update(
        { title, description, price },
        { where: {} }
      );
      res.json({ result });
    } else {
      res.status(400).json({ message: "Поля не заполнены" });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
