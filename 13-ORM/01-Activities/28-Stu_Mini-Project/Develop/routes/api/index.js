const router = require('express').Router();
const travelRoutes = require('./travelRoutes');

router.use('/travel', travelRoutes);

module.exports = router;