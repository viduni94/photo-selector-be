const { Joi } = require('celebrate');

const postPhotoGridBody = Joi.object().keys({
  authorId: Joi.string().required(),
	entries: Joi.object().pattern(/\w/, Joi.object().keys({
    id: Joi.number().required(),
    message: Joi.string().optional().allow(''),
    picture: Joi.string().required(),
    pictureSmall: Joi.string().optional().allow(''),
    pictureMedium: Joi.string().optional().allow(''),
    pictureStored: Joi.string().optional().allow(''),
    timestamp: Joi.date().timestamp().required(),
  })),
	updatedAt: Joi.date().optional,
});

export default postPhotoGridBody;
