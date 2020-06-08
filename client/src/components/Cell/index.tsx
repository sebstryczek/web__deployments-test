import styled from 'styled-components';
import { width, WidthProps } from 'styled-system';

const Cell = styled.div<WidthProps>`
  border: 1px solid #e4e4e4;
  padding: 4px 8px;
  margin-right: -1px;
  margin-bottom: -1px;
  ${width}
`;

export default Cell;
