import React from 'react';

import { DeploymentDTO } from '../../store/deployments/actions';
import Box from '../Box';
import Cell from '../Cell';
import DeploymentItem from '../DeploymentItem';

type Props = {
  items: DeploymentDTO[];
  onDeleteItemClick: (id: string) => void;
};

const DeploymentList: React.FC<Props> = ({ items, onDeleteItemClick }) => (
  <Box>
    <Box display="flex">
      <Cell width={250}>
        Url
      </Cell>
      <Cell width={150}>
        Template Name
      </Cell>
      <Cell width={150}>
        Version
      </Cell>
    </Box>
    {items.map(x => <DeploymentItem key={x._id} data={x} onDeleteClick={onDeleteItemClick} />)}
  </Box>
);

export default DeploymentList;
