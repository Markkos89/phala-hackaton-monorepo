const express = require("express");
const router = express.Router();
const Configs = require("../models/configs");

// GET all Configs
router.get("/", async (req, res) => {
  try {
    const configList = await Configs.find();
    res.json(configList);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a Config by varName
router.get("/:varName", async (req, res) => {
  const varName = req.params.varName; // Get the varName from the query parameter
  try {
    const config = await Configs.findOne({ varName }); // Find the Config by varName
    if (!config) {
      return res.status(404).json({ error: "Config not found" });
    }
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a single Config by ID
router.get("/:id", async (req, res) => {
  try {
    const config = await Configs.findById(req.params.id);
    if (!config) {
      return res.status(404).json({ error: "Config was not found" });
    }
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST a new Config
router.post("/", async (req, res) => {
  try {
    const newConfig = new Configs(req.body);
    await newConfig.save();
    res.status(201).json(newConfig);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
});

// PUT (Update) an existing Config by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedConfig = await Configs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedConfig) {
      return res.status(404).json({ error: "Config not found" });
    }
    res.json(updatedConfig);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
});

module.exports = router;
