

import styled from 'styled-components';

export const Flex = styled.div`
   display: flex;
   justify-content: ${({justify})=> justify || "center"};
   align-items: ${({ailgn})=> ailgn || "center"};
   flex-wrap: ${({wrap})=> wrap || "nowrap"};
`;

export default Flex;
