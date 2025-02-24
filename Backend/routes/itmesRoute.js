const express = require('express');
const router = express.Router(); // router instead of app

const { getAllItems,getspeceficItem, updateSpeceficItem,deleteSpeceficItem} = require('../controllers/itemsControllers');

router.route('/').get(getAllItems);
router.route('/:idItem')
        .get(getspeceficItem)
        .patch(updateSpeceficItem)
        .delete(deleteSpeceficItem)

module.exports = router;