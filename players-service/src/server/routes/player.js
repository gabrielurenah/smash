import express from 'express';
import { show } from '../controllers/players';

const router = express.Router();

/**
 * @route GET '/'
 * @returns {JSON} of all players
 * @access Public
 */
router.get('/', show);

export default router;
