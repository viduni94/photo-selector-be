import httpStatus from 'http-status';
import log from '../../../../utils/logger';
import { to } from '../../../../utils/to';
import { postPhotoGrid, getPhotoGrid, putPhotoGrid } from './service';

export const savePhotoGrid = async (req, res) => {
  try {
    const [postPhotoGridError, postPhotoGridResponse] = await to(postPhotoGrid(req.body));
    if (postPhotoGridResponse) {
      log('[PHOTO-GRID] Saving photo grid successful');
      return res.status(httpStatus.OK).json(postPhotoGridResponse);
    }
    log(`[PHOTO-GRID] Saving photo grid failed  | error: ${JSON.stringify(postPhotoGridError)}`);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(postPhotoGridError);
  } catch (err) {
    log(`[PHOTO-GRID] Saving photo grid failed  | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};

export const fetchPhotoGrid = async (req, res) => {
  try {
    const [fetchPhotoGridError, fetchPhotoGridResponse] = await to(getPhotoGrid());

    if (fetchPhotoGridError) {
      log(`[PHOTO-GRID] Fetching photo grid failed  | error: ${JSON.stringify(fetchPhotoGridError)}`);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(fetchPhotoGridError);
    }

    if (fetchPhotoGridResponse) {
      log('[PHOTO-GRID] Fetching photo grid successful');
      return res.status(httpStatus.OK).json(fetchPhotoGridResponse);
    }
    log('[PHOTO-GRID] Fetching photo grid successful | Photo grid empty');
    return res.status(httpStatus.NO_CONTENT).json();
  } catch (err) {
    log(`[PHOTO-GRID] Fetching photo grid failed  | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};

export const updatePhotoGrid = async (req, res) => {
  try {
    const [updatePhotoGridError, updatePhotoGridResponse] = await to(putPhotoGrid(req.body));
    if (updatePhotoGridResponse) {
      log('[PHOTO-GRID] Updating photo grid successful');
      return res.status(httpStatus.OK).json(updatePhotoGridResponse);
    }
    log(`[PHOTO-GRID] Updating photo grid failed  | error: ${JSON.stringify(updatePhotoGridError)}`);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(updatePhotoGridError);
  } catch (err) {
    log(`[PHOTO-GRID] Updating photo grid failed  | error: ${JSON.stringify(err)}`);
    throw new Error(err);
  }
};
