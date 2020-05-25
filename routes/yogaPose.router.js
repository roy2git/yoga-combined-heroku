const express = require("express");
const router = express.Router();
const YogaPose = require("../models/yogaPose.model");

router.get("/yogaPoses", (req, res) => {
  console.log("Inside yogaPoses");
  const yogaPoses = YogaPose.find({}, (err, yogaPoses) => {
    if (!err) {
      res.status(200).json(yogaPoses);
    } else {
      res.status(400).json("Eror fetching data");
    }
  });
});

router.get("/yogaPoses/:id", (req, res) => {
  let id = req.params.id;

  let yogaPose = YogaPose.findById(id, (err, yogaPose) => {
    if (!err) {
      res.status(200).json(yogaPose);
    } else {
      res.status(400).json("Eror fetching data");
    }
  });
});

//add an YogaPose
router.post("/yogaPoses", (req, res) => {
  console.log(req.body);

  let newYogaPose = new YogaPose({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    time: req.body.time,
  });

  newYogaPose.save((err) => {
    if (!err) {
      res.status(201).json(newYogaPose);
    } else {
      res.status(400).json("Eror while creating new Record");
      console.log(err);
    }
  });
});

router.put("/yogaPoses/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let updatedyogaPose = YogaPose.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        time: req.body.time,
      },
    },
    (err, yogaPose) => {
      if (!err) {
        res.status(200).json(yogaPose);
      } else {
        res.status(400).json("Eror while creating new Record");
      }
    }
  );
});

// router.delete("/yogaPoses/:id", async (req, res) => {
//   var delet = await YogaPose.findByIdAndRemove(req.params.id)
//     .then((e) => {
//       res.status(200).json("Deleted successfullt");
//     })
//     .catch((e) => console.log(e));
// });

router.delete("/yogaPoses/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let yogaPoseToDelete = YogaPose.findByIdAndRemove(id, (err) => {
    if (err) {
      res.status(404).json({
        message: "YogaPose was not found",
      });
    } else {
      res.status(200).json({
        message: "YogaPose was deleted successfully",
      });
    }
  });
});

module.exports = router;
