import httpStatus from 'http-status';
import log from '../../../../utils/logger';
import { handle } from '../../../../utils/handle';
import PhotoGridModel from '../../../../models/photoGrid';
import sendErrorResponse from '../../../../utils/sendErrorResponse';

export const savePhotoGrid = async (req, res) => {
  const { authorId, entries } = req.body;

  try {
    const photoGridEntry = new PhotoGridModel({
      author_id: authorId,
      entries,
      created_at: Date.now(),
    });

    const [error, response] = await handle(photoGridEntry.save());

    if (error) {
      log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(error)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }
    log(`[PHOTO-GRID] Photo grid inserted successfully | response: ${JSON.stringify(response)}`);
    return res.status(httpStatus.OK).json(response);
  } catch (err) {
    log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};

export const fetchPhotoGrid = async (req, res) => {
  try {
    const [error, response] = await handle(PhotoGridModel.find({}));

    if (error) {
      log(`[PHOTO-GRID] Retrieving photo grid failed | error: ${JSON.stringify(error)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }

    if (response && response.length > 0) {
      log(`[PHOTO-GRID] Photo grid retrieved successfully | response: ${JSON.stringify(response)}`);
      return res.status(httpStatus.OK).json(response);
    } else {
      log(`[PHOTO-GRID] Photo grid not found | response: ${JSON.stringify(response)}`);
      return res.status(httpStatus.NO_CONTENT).json({ message: 'Photo grid not found' });
    }
  } catch (err) {
    log(`[PHOTO-GRID] Retrieving photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};

export const updatePhotoGrid = async (req, res) => {
  const { photoGridId, authorId, entries } = req.body;
  try {
    const photoGridUpdateEntry = {
      _id: photoGridId,
      author_id: authorId,
      entries,
      updated_at: Date.now(),
    };

    const [error, response] = await handle(PhotoGridModel.findOneAndUpdate({ _id: photoGridId }, photoGridUpdateEntry, { new: true }));

    if (error) {
      log(`[PHOTO-GRID] Updating photo grid failed | error: ${JSON.stringify(error)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }

    if (response) {
      log(`[PHOTO-GRID] Updating photo grid successful | response: ${JSON.stringify(response)}`);
      return res.status(httpStatus.OK).json(response);
    }
    log(`[PHOTO-GRID] Photo grid not found | id: ${photoGridId}`);
    return res.status(httpStatus.BAD_REQUEST).json({ photoGridId, message: 'Photo grid not found' });
  } catch (err) {
    log(`[PHOTO-GRID] Updating photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};
