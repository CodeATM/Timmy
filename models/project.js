import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({

  name: {
    type: String,
    required: [true, 'Project name is required'],
  },

  category: {
    type: String,
    required: [true, 'What category id the project'],
  },

  github: {
    type: String,
    required: [true, 'Add githup repo'],
  },
  // hostedLink: {
  //   type: String,
  //   // required: [true, 'Please add a hosted link'],
  // },

  image: {
    type: String,
  },

  description: {
    type: String,
    required: [true, 'Give a brief description of the project'],
  }
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;