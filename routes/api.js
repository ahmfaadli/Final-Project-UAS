// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient

router.get('/patients', PatientController.index);

router.post('/patients', PatientController.store);

router.put('/patients/:id', PatientController.update);

// router.delete('/patients/:id', PatientsController.destroy);

// router.get('/patients/:id', PatientsController.show);

// router.get('/patients/search/:name', PatientsController.search);

// router.get('/patients/status/positive', PatientsController.positive);

// router.get('/patients/status/recovered', PatientsController.recovered);

// router.get('/patients/status/dead', PatientsController.dead);


// export router
module.exports = router;
