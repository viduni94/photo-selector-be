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

    const [createPhotoGridError, createPhotoGridRes] = await to(photoGridEntry.save());

    if (createPhotoGridError) {
      log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(createPhotoGridError)}`);
      return sendErrorResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {
        error: 'INTERNAL_SERVER_ERROR',
		    message: 'Something went wrong. try again',
      });
    }
    log(`[PHOTO-GRID] Photo grid inserted successfully | response: ${JSON.stringify(createPhotoGridRes)}`);
    return createPhotoGridRes;
  } catch (err) {
    log(`[PHOTO-GRID] Inserting photo grid failed | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};
