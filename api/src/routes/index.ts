import {Router} from 'express';
const userRoutes = require('./user');
const router = Router();

router.use('/user', userRoutes);

module.exports = router;