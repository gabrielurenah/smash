import express from 'express';
import { show, create, findById, remove, update } from '../controllers/players';

const router = express.Router();

/**
 * @route GET '/'
 * @returns {JSON} of all players
 * @access Public
 */
router.get('/', show);

/**
 * @route GET '/:id'
 * @returns {JSON} of a specific player
 * @access Public
 */
router.get('/:id', findById);

/**
 * @route POST '/'
 * @returns {JSON} of player created
 * @access Public
 */
router.post('/', create);

/**
 * @route PUT '/:id'
 * @returns {JSON} of player updated
 * @access Public
 */
router.put('/:id', update);

/**
 * @route DELETE '/:id'
 * @returns status code of NO_CONTENT
 * @access Public
 */
router.delete('/:id', remove);

export default router;
