import {
  Schema, Document, Model, model,
} from 'mongoose';

const DeploymentSchema = new Schema({
  url: { type: String, required: true },
  templateName: { type: String, required: true },
  version: { type: String, required: true },
  deployedAt: { type: Date, required: true },
});

type Deployment = {
  url: string,
  templateName: string,
  version: string,
  deployedAt: Date,
};

type DeploymentDocument = Document & Deployment;
type DeploymentModel = Model<DeploymentDocument>;

const DeploymentModel = model<DeploymentDocument, DeploymentModel>('Deployment', DeploymentSchema);

export default DeploymentModel;
