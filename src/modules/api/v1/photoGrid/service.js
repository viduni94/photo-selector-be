import httpStatus from 'http-status';
import PhotoGridModel from '../../../../models/photoGrid';
import sendErrorResponse from '../../../../utils/sendErrorResponse';
import log from '../../../../utils/logger';
import { to } from '../../../../utils/to';

export const postPhotoGrid = async ({ authorId, entries }) => {
  try {
    const photoGridEntry = new PhotoGridModel({
      author_id: authorId,
      entries,
      created_at: Date.now(),
    });

    const [error, response] = await to(photoGridEntry.save());

    if (error) {
      log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(error)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }
    log(`[PHOTO-GRID] Photo grid inserted successfully | response: ${JSON.stringify(response)}`);
    return response;
  } catch (err) {
    log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};

export const getPhotoGrid = async () => {
  try {
    const [error, response] = await to(PhotoGridModel.find({}));

    if (error) {
      log(`[PHOTO-GRID] Retrieving photo grid failed | error: ${JSON.stringify(error)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }

    if (response && response.length > 0) {
      log(`[PHOTO-GRID] Photo grid retrieved successfully | response: ${JSON.stringify(response)}`);
      return response;
    } else {
      log(`[PHOTO-GRID] Photo grid empty | response: ${JSON.stringify(response)}`);
      return undefined;
    }
  } catch (err) {
    log(`[PHOTO-GRID] Retrieving photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};