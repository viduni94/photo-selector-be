import httpStatus from 'http-status';
import log from '../../../../utils/logger';
import { to } from '../../../../utils/to';
import { postPhotoGrid, getPhotoGrid } from './service';

export const savePhotoGrid = async (req, res) => {
  try {
    const [postPhotoGridError, postPhotoGridResponse] = await to(postPhotoGrid(req.body));
    if (postPhotoGridResponse) {
      log('[PHOTO-GRID] Saving photo grid successful');
      return res.status(httpStatus.OK).json(postPhotoGridResponse);
    }
    log(`[PHOTO-GRID] Saving photo grid failed  | error: ${JSON.stringify(postPhotoGridError)}`);
    return postPhotoGridError;
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
      return fetchPhotoGridError;
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
