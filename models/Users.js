import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name'],
    },
    surname: {
      type: String,
      required: [true, 'Please add surname'],
    },
    email: {
      type: String,
      required: [true, 'Please add email'],
      unique: true,
    },
    grade: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: false,
    },
    contacts: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
