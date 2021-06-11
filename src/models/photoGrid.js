import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PhotoGridSchema = new Schema({
  author_id: {
    type: Schema.Types.String,
		require: true
  },
	entries: {
		type: Schema.Types.Array,
		require: true
	},
	created_at: {
		type: Schema.Types.Date,
    default: Date.now,
	},
  updated_at: {
    type: Schema.Types.Date,
  },
});

const PhotoGridModel = mongoose.model('PhotoGrid', PhotoGridSchema);

export default PhotoGridModel;
