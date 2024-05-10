import { model, Schema } from "mongoose";

const ProjectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    type: { type: Array, default: [] }
    },
    { collection: 'projects' }
);

const ProjectsModel = model("projects", ProjectsSchema);
export default ProjectsModel;