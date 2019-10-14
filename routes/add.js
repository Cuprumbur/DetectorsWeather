const {Router} = require("express");
const Detectors = require('../models/detector');
const router = Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: "Новый датчик",
        isAdd: true
    });
});

router.post('/', auth, async (req, res) => {
    const detector = new Detectors({
      model_detector: req.body.model_detector,
      name_detector: req.body.name_detector,
      producing_country: req.body.producing_country
    });

    try {
      await detector.save();
      res.redirect('/sensors');
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;