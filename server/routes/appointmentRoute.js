const router = require("express").Router();
const Appointment = require("../models/appointmentModel");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/userId", isAuthenticated, async (req, res) => {
  const { ID } = req.body;
  try {
    const appointments = await Appointment.find({ userId: ID });
    res.status(200).send({
      message: "Appointments fetched successfully",
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching appointments",
      success: false,
      error,
    });
  }
});
module.exports = router;
