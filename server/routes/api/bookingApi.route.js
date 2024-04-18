const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Booking } = require("../../db/models");
const { Service } = require("../../db/models");
const { User } = require("../../db/models");
const {sendMail} = require("../../utils/sendMail")

router.get("/user/bookings", async (req, res) => {
  try {
    // const { id } = req.params;
    const result = await Booking.findAll({
      where: { userId: res.locals.user.id },
      include: {
        model: Service,
        attributes: ["title"],
      },
    });
    res.status(200).json({ bookings: result });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/user/newBooking", async (req, res) => {
  try {
    const { serviceId, startDate } = req.body;
    const result = Booking.create({
      userId: res.locals.user.id,
      serviceId,
      startDate,
    });
    if (result) {
      res.json(result);
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete("/user/delBooking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, 11111);
    const delBooking = await Booking.destroy({ where: { id } });

    if (delBooking) {
      res.json({ id: +id });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/admin/booking", async (req, res) => {
  try {
    const result = await Booking.findAll({
      include: {
        model: Service,
        attributes: ["title"],
      },
    });
    res.json({ bookings: result });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/admin/booking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { status } = req.body;
    console.log(status);
    if (status) {
      
      const [,resultBooking] = await Booking.update({ status },{ where: { id }, returning:true } );
      console.log(resultBooking);
      if (resultBooking[0].status === 'confirmed') {
        const user = await User.findOne({where:{id:resultBooking[0].userId}})
        console.log(user)
        const text = `Добрый день, ${user.name} ваше бронирование подтвержденно`
        await sendMail(user.email,'Ваше бронирование подтвержденно',text)
        res.json( resultBooking[0]);
        
      } 
      else if(resultBooking[0].status === 'rejected'){ 
        
      }else {
        res.json({ message: "Not update" });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete("/admin/delBooking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delBooking = await Booking.destroy({ where: { id } });

    if (delBooking) {
      res.json({ id: +id });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
