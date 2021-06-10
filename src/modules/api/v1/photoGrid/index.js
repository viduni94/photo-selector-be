import express from 'express';
import { celebrate } from 'celebrate';
import { postPhotoGridBody, updatePhotoGridBody } from '../../../../schemas/photoGridSchema';
import { savePhotoGrid, fetchPhotoGrid, updatePhotoGrid } from './controller';

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

/**
 * @swagger
 * /api/v1/photos-grid:
 *   get:
 *     description: Retrieve photo grid
 *     tags: [Photo-Grid]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved photo grid
 *       400:
 *        description: Bad request
 *       403:
 *        description: Forbidden
 *       500:
 *         description: Internal server error
 */
 photoGrid.get('/', fetchPhotoGrid);

 /**
 * @swagger
 * /api/v1/photos-grid:
 *   put:
 *     description: Update photo grid
 *     tags: [Photo-Grid]
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: updatePhotoGridBody
 *        description: Photo entries for photo grid
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            photoGridId:
 *              type: string
 *              required: true
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
 *     responses:
 *       200:
 *         description: Successfully updated photo grid
 *       400:
 *        description: Bad request
 *       403:
 *        description: Forbidden
 *       500:
 *         description: Internal server error
 */
photoGrid.put('/',
  celebrate({
    body: updatePhotoGridBody,
  }),
  updatePhotoGrid,
);

export default photoGrid;
