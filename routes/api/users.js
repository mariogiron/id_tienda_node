const router = require('express').Router();

const User = require('../../models/user.model');

router.get('/', async (req, res) => {
    const users = await User
        .find()
        .populate('products')
        .exec();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// PUT /api/users/IDUSER/product/IDPRODUCT
router.put('/:userId/product/:productId', async (req, res) => {
    const { userId, productId } = req.params;

    // Recupero el usuario
    const user = await User.findById(userId);

    // Agrego el producto al usuario
    user.products.push(productId);

    // Guardo el usuario en la BD
    await user.save();

    res.json(user);
});


module.exports = router;