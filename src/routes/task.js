const express = require("express");
const checklist = require("../models/checklist");

const checklistDependentRouter = express.Router();

const Checklist = require("../models/checklist");
const Task = require("../models/task");

checklistDependentRouter.get("/:id/tasks/new", async (req, res) => {
  try {
    let task = new Task();
    res.status(200).render("tasks/new", { checklistId: req.params.id, task: task });
  } catch (error) {
    res.status(422).render("pages/error", { error: "Erro ao carregar o formulário" });
  }
});

module.exports = { checklistDependent: checklistDependentRouter };
