import {
  Schema, Document, Model, model,
} from 'mongoose';

const TemplateSchema = new Schema({
  name: { type: String, required: true },
  versions: [{ type: String, required: true }],
});

type Template = {
  name: string,
  templateName: string[],
};

type TemplateDocument = Document & Template;
type TemplateModel = Model<TemplateDocument>;

const TemplateModel = model<TemplateDocument, TemplateModel>('Template', TemplateSchema);

export default TemplateModel;
