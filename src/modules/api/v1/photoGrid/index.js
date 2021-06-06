import express from 'express';
import { celebrate } from 'celebrate';

const photoGrid = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Photo Grid
 *     description: Manage photo grid
 */

/**
 * @swagger
 * /api/v1/photo-grid:
 *   post:
 *     description: Retrieve saved photo grid
 *     tags: [Photo-Grid]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved saved photo grid
 *       400:
 *        description: Bad request
 *       403:
 *        description: Forbidden
 *       500:
 *         description: Internal server error
 */
photoGrid.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

export default photoGrid;
