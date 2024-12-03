const UniversalModel = require("../models/universal.model.js");

exports.getAll = async (req, res) => {
  const table = req.params.table;
  try {
    const data = await UniversalModel.getAll(table);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: `Erreur lors de la récupération des données de la table ${table}: ${error.message}`,
    });
  }
};

exports.getById = async (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  try {
    const data = await UniversalModel.getById(table, id);
    if (data.length === 0) {
      res.status(404).send({ message: `Aucune entrée trouvée avec l'ID ${id}` });
    } else {
      res.send(data[0]);
    }
  } catch (error) {
    res.status(500).send({
      message: `Erreur lors de la récupération de l'entrée avec l'ID ${id} dans la table ${table}: ${error.message}`,
    });
  }
};

exports.create = async (req, res) => {
  const table = req.params.table;
  try {
    const result = await UniversalModel.create(table, req.body);
    res.send({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).send({
      message: `Erreur lors de la création d'une entrée dans la table ${table}: ${error.message}`,
    });
  }
};

exports.update = async (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  try {
    await UniversalModel.update(table, id, req.body);
    res.send({ message: `Entrée avec l'ID ${id} mise à jour avec succès.` });
  } catch (error) {
    res.status(500).send({
      message: `Erreur lors de la mise à jour de l'entrée avec l'ID ${id} dans la table ${table}: ${error.message}`,
    });
  }
};

exports.delete = async (req, res) => {
  const table = req.params.table;
  const id = req.params.id;
  try {
    await UniversalModel.delete(table, id);
    res.send({ message: `Entrée avec l'ID ${id} supprimée avec succès.` });
  } catch (error) {
    res.status(500).send({
      message: `Erreur lors de la suppression de l'entrée avec l'ID ${id} dans la table ${table}: ${error.message}`,
    });
  }
};
