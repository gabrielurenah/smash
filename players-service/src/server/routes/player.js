import express from 'express';
import { show, create } from '../controllers/players';

const router = express.Router();

/**
 * @route GET '/'
 * @returns {JSON} of all players
 * @access Public
 */
router.get('/', show);

/**
 * @route POST '/'
 * @returns {JSON} of player created
 * @access Public
 */
router.post('/', create);

export default router;
