const express = require('express');
const router = express.Router(); // router instead of app

const { getAllItems,getspeceficItem, updateSpeceficItem,deleteSpeceficItem} = require('../Controller/burgerControlleer');

router.route('/').get(getAllItems);
router.route('/:idItem')
        .get(getspeceficItem)
        .patch(updateSpeceficItem)
        .delete(deleteSpeceficItem)

module.exports = router;