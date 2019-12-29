import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px 20px 0px;

    h1 {
        margin-right: 20px;
    }
`;

export const Thumbnail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .name {
        margin: 10px 0;
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: '';
    align-items: '';
    text-align: left;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-align: left;
`;

export const Star = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    p {
        margin-left: 8px;
    }
`;
