import styled from 'styled-components';
import {
  display, DisplayProps,
  flex, FlexProps,
  flexShrink, FlexShrinkProps,
  flexGrow, FlexGrowProps,
  flexDirection, FlexDirectionProps,
  width, WidthProps,
  height, HeightProps,
  space, SpaceProps,
} from 'styled-system';

type Props =
  & DisplayProps
  & FlexProps
  & FlexShrinkProps
  & FlexGrowProps
  & FlexDirectionProps
  & WidthProps
  & HeightProps
  & SpaceProps;

const Box = styled.div<Props>`
  ${display}
  ${flex}
  ${flexShrink}
  ${flexGrow}
  ${flexDirection}
  ${width}
  ${height}
  ${space}
`;

export default Box;
