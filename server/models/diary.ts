import { Schema, model } from 'mongoose';

interface IDiary {
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
}


const diarySchema = new Schema<IDiary>({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  tags: [
    {
      type: [String],
      // default: ["all"],
      validate: {
        validator: (v: any) => v.every((tag: any) => typeof tag === 'string'),
        message: 'Tags must be strings.',
      },
    },
  ],
},
{ timestamps: {
  currentTime: () => new Date(Date.now() + 60 * 60 * 1000),
} });


const Diary = model<IDiary>("Diary", diarySchema);

export default Diary
