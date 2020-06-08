import mongoose from 'mongoose';

const setup = async (dbUri: string) => {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(dbUri, params);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default {
  setup,
};
