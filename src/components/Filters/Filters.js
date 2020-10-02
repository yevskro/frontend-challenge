import React from 'react';
import styled from 'styled-components';

function Filters(props){
    return <StyledFilters role='listbox'>
        {props.children}
    </StyledFilters>
}

const StyledFilters = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export default Filters;