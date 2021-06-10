import express from 'express';
import { celebrate } from 'celebrate';
import postPhotoGridBody from '../../../../schemas/photoGridSchema';
import { savePhotoGrid } from './controller';

const photoGrid = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Photo Grid
 *     description: Manage photo grid
 */

/**
 * @swagger
 * /api/v1/photos-grid:
 *   get:
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

/**
 * @swagger
 * /api/v1/photos-grid:
 *   post:
 *     description: Save photo grid
 *     tags: [Photo-Grid]
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: postPhotoGridBody
 *        description: Photo entries for photo grid
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            authorId:
 *              type: string
 *              required: true
 *            entires:
 *              type: object
 *              additionalProperties:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    required: true
 *                  message:
 *                    type: string
 *                  picture:
 *                    type: string
 *                    required: true
 *                  timestamp:
 *                    type: integer
 *              required: true
 *            updatedAt:
 *              type: Date
 *     responses:
 *       200:
 *         description: Successfully saved photo grid
 *       400:
 *        description: Bad request
 *       403:
 *        description: Forbidden
 *       500:
 *         description: Internal server error
 */
 photoGrid.post('/',
  celebrate({
    body: postPhotoGridBody,
  }),
  savePhotoGrid,
);

export default photoGrid;
