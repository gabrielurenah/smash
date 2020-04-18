import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

mongoosePaginate.paginate.options = {
  customLabels: {
    docs: 'list',
    limit: 'perPage',
    page: 'currentPage',
  },
};

export default mongoose.plugin(mongoosePaginate);
