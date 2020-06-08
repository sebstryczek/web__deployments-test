import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Layout from './layout';

import deploymentsActions, { CreateDeploymentDTO } from './store/deployments/actions';
import templatesActions from './store/templates/actions';
import useSelector from './store/useSelector';
import DeploymentForm from './components/DeploymentForm';
import DeploymentList from './components/DeploymentList';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const deployments = useSelector((state) => state.deployments);
  const templates = useSelector((state) => state.templates);

  useEffect(() => {
    dispatch(deploymentsActions.fetchDeployments());
    dispatch(templatesActions.fetchTemplates());
  }, [dispatch]);

  const addDeployment = useCallback((deploymentData: CreateDeploymentDTO) => {
    dispatch(deploymentsActions.addDeployment(deploymentData));
  }, [dispatch]);

  const deleteDeployment = useCallback((id: string) => {
    dispatch(deploymentsActions.deleteDeployment(id));
  }, [dispatch]);

  return (
    <Layout>
      {
        deployments.isFetching
          ? 'Loading...'
          : (
            <>
              <DeploymentForm onSubmit={addDeployment} templates={templates.items} />
              <DeploymentList items={deployments.items} onDeleteItemClick={deleteDeployment} />
            </>
          )
      }
    </Layout>
  );
};

export default App;
