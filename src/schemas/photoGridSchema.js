const { Joi } = require('celebrate');

export const postPhotoGridBody = Joi.object().keys({
  authorId: Joi.string().required(),
	entries: Joi.array().required(),
});

export const updatePhotoGridBody = Joi.object().keys({
  photoGridId: Joi.string().required(),
  authorId: Joi.string().required(),
	entries: Joi.array().required(),
});
