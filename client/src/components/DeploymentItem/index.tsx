import React, { useCallback } from 'react';
import { DeploymentDTO } from '../../store/deployments/actions';
import Cell from '../Cell';
import { DeleteButton, Row } from './styles';

type Props = {
  data: DeploymentDTO;
  onDeleteClick: (id: string) => void;
};

const DeploymentItem: React.FC<Props> = ({ data, onDeleteClick }) => {
  const handleOnClick = useCallback(() => {
    onDeleteClick(data._id);
  }, [data._id, onDeleteClick]);

  return (
    <Row>
      <Cell width={250}>
        {data.url}
      </Cell>
      <Cell width={150}>
        {data.templateName}
      </Cell>
      <Cell width={150}>
        {data.version}
      </Cell>
      <DeleteButton onClick={handleOnClick}>
        x
      </DeleteButton>
    </Row>
  );
};

export default DeploymentItem;
