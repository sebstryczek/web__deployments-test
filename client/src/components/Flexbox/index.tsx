import styled from 'styled-components';
import {
  flex, FlexProps,
  flexShrink, FlexShrinkProps,
  flexGrow, FlexGrowProps,
  flexDirection, FlexDirectionProps,
  width, WidthProps,
  height, HeightProps,
  space, SpaceProps,
} from 'styled-system';

type Props =
  & FlexProps
  & FlexShrinkProps
  & FlexGrowProps
  & FlexDirectionProps
  & WidthProps
  & HeightProps
  & SpaceProps;

const Flexbox = styled.div`
  display: flex;
  ${flex}
  ${flexShrink}
  ${flexGrow}
  ${flexDirection}
  ${width}
  ${height}
  ${space}
`;

export default Flexbox;
