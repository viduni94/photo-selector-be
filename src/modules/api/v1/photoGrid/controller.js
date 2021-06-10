import httpStatus from 'http-status';
import log from '../../../../utils/logger';
import { to } from '../../../../utils/to';
import { postPhotoGrid } from './service';

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
