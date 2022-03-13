import styled from '@emotion/styled';
const Button = styled.button`
    color: ${
        (props: any) => props.primary ? 'blue': 'turquoise' 
    };
`