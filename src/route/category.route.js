const express = require('express');
const router = express.Router();
const categoryController = require("../controller/controller.category");

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;


