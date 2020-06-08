import React, { useState, useCallback } from 'react';

import { CreateDeploymentDTO } from '../../store/deployments/actions';
import { TemplateDTO } from '../../store/templates/actions';
import {
  Label, Input, Select, SubmitButton,
} from './styles';

type Props = {
  templates: TemplateDTO[];
  onSubmit: ({ url, templateName, version }: CreateDeploymentDTO) => void;
};

const DeploymentForm: React.FC<Props> = ({ templates, onSubmit }) => {
  const [state, setState] = useState<CreateDeploymentDTO>({
    url: '',
    templateName: '',
    version: '',
  });
  const [versions, setVersions] = useState<string[] | null>(null);

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  }, [state]);

  const handleOnChangeTemplateName = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setState({
      ...state,
      templateName: value,
      version: '',
    });

    const template = templates.find(x => x.name === value);
    if (template) {
      setVersions(template.versions);
    } else {
      setVersions(null);
    }
  }, [state, templates]);

  const handleOnSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  }, [state, onSubmit]);

  const isUrlValid = state.url.length > 3;
  const isTemplateNameValid = state.templateName.length > 3;
  const isVersionValid = state.version.length > 3;
  const iValid = isUrlValid && isTemplateNameValid && isVersionValid;

  return (
    <form onSubmit={handleOnSubmit}>
      <Label htmlFor="url">
        URL:
        <Input id="url" name="url" type="text" value={state.url} onChange={handleOnChange} />
      </Label>
      <Label htmlFor="templateName">
        Template Name:
        <Select id="templateName" name="templateName" onChange={handleOnChangeTemplateName} value={state.templateName}>
          <option value="">--</option>
          {templates.map(x => (
            <option key={x._id} value={x.name}>{x.name}</option>
          ))}
        </Select>
      </Label>
      {
        versions && (
          <Label htmlFor="version">
            Version:
            <Select id="version" name="version" onChange={handleOnChange} value={state.version}>
              <option value="">--</option>
              {versions.map(x => (
                <option key={x} value={x}>{x}</option>
              ))}
            </Select>
          </Label>
        )
      }
      <SubmitButton type="submit" disabled={!iValid}>Add</SubmitButton>
    </form>
  );
};

export default DeploymentForm;
