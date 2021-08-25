import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default: 'https://ui-avatars.com/api/?name=Unnamed+User',
    },
  },
  { timestamps: true }
);

AuthorSchema.pre('save', async function (next) {
  const newAuthor = this;
  this.avatar = `https://ui-avatars.com/api/?name=${this.name}+${this.surname}`;
  const plainPW = newAuthor.password;
  if (newAuthor.isModified('password')) {
    newAuthor.password = await bcrypt.hash(plainPW, 10);
  }
  next();
});

AuthorSchema.methods.toJSON = function () {
  const authorDocument = this;

  const authorObject = authorDocument.toObject();

  delete authorObject.password;
  delete authorObject.__v;
  return authorObject;
};

AuthorSchema.statics.checkCredentials = async function (email, plainPW) {
  const user = await this.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(plainPW, user.password);
    if (isMatch) return user;
    else null;
  } else {
    return null;
  }
};

export default mongoose.model('Author', AuthorSchema);
