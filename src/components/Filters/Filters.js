import React from 'react';
import styled from 'styled-components';

function Filters(props){
    return <StyledFilters>
        {props.children}
    </StyledFilters>
}

const StyledFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export default Filters;