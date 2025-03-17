const query = require('../database/pg');

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    await query('INSERT INTO categories (name) VALUES ($1)', [name]);
    res.status(201).send('Category created');
};

exports.getCategories = async (req, res) => {
    const categories = await query('SELECT * FROM categories');
    const result = await Promise.all(categories.map(async (category) => {
        const products = await query('SELECT * FROM products WHERE category_id = $1', [category.id]);
        return { ...category, products };
    }));
    res.json(result);
};

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    await query('UPDATE categories SET name = $1 WHERE id = $2', [name, id]);
    res.send('Category updated');
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await query('DELETE FROM categories WHERE id = $1', [id]);
    res.send('Category deleted');
};
