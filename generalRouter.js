const express = require("express");
const router = express.Router();
const Record = require("./db/recordsModel");
const APIFeatures = require("./utils/apiFeatures");
const AppError = require("./utils/appError");
const catchAsync = require("./utils/catchAsync");

router.get(
  "/",
  catchAsync(async (req, res, next) => {
    res.status(200).json({
      status: "success",
      data: "hello from server"
    });
  })
);

router.post(
  "/records",
  catchAsync(async (req, res, next) => {
    console.log(req.body);
    const record = await Record.create(req.body);
    console.log(record);
    res.status(201).json({
      status: "success",
      data: record
    });
  })
);

router.get(
  "/records",
  catchAsync(async (req, res, next) => {
    const record = await Record.find();

    res.status(200).json({
      status: "success",
      length: record.length,
      data: record
    });
  })
);

router.get(
  "/stats",
  catchAsync(async (req, res, next) => {
    const record = await Record.aggregate([
      {
        $group: {
          _id: {
            month: {
              $month: "$date"
            },
            year: {
              $year: "$date"
            }
          },
          records: {
            $push: {
              id: "$_id",
              date: "$date",
              amount: "$amount",
              description: "$description"
            }
          },
          sum: { $sum: "$amount" }
        }
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1
        }
      }
    ]);

    res.status(200).json({
      status: "success",
      data: record
    });
  })
);

router.delete(
  "/records/:id",
  catchAsync(async (req, res, next) => {
    const id = req.params.id;
    await Record.findByIdAndDelete(id);

    res.status(204).json({
      status: "success"
    });
  })
);
module.exports = router;
