import { run } from "node:test";

const httpStataus = require('../Utils/httpStatusText');

// getBurgers from database

const Beef = require('../models/item.model');
//getAllItems from database
exports.getAllItems = async (req, res) => {
  try {
  
    const AllBeefs = await Beef.find();
    res.status(200).json({
      status: httpStataus.SUCCESS,
      data: {
        AllBeefs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: httpStataus.ERROR,
      message: err.message,
    });
  }
};
// getspeceficItem burger
exports.getspeceficItem = async (req, res) => {
  try {
    const oneBeef = await Beef.findById( req.params.idItem );
    if (oneBeef) {
      res.status(200).json({
        status: httpStataus.SUCCESS,
        data: {
          oneBeef,
        },
      });
    } else {
      res.status(400).json({
        status: httpStataus.FAILED,
        data: {
          course: null,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: httpStataus.ERROR,
      message: err.message,
    });
  }
};
// updateSpeceficItem 
exports.updateSpeceficItem = async (req, res) => {
  try {
   
    const oneBeef = await Beef.findByIdAndUpdate(
        req.params.idItem ,
        req.body ,
      {
        new: true,
        runValidators: true
      }
    );
    if (oneBeef) {
      res.status(200).json({
        status: httpStataus.SUCCESS,
        data: {
          oneBeef,
        },
      });
    } else {
      res.status(400).json({
        status: httpStataus.FAILED,
        data: {
          burger: null,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: httpStataus.ERROR,
      message: err.message,
    });
  }
};
// delete specific item
exports.deleteSpeceficItem = async (req, res) => {
  try {
    const oneBeef = await Beef.findByIdAndDelete(req.params.idItem);
    if (oneBeef) {
      res.status(200).json({
        status: httpStataus.SUCCESS,
        data: null,
      });
    } else {
      res.status(400).json({
        status: httpStataus.FAILED,
        data: {
          message: 'id is not correct',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: httpStataus.ERROR,
      message: err.message,
    });
  }
};
