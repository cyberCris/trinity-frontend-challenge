import styled from 'styled-components';

export const Container = styled.div`
    max-width: 300px;
    background: #242435;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 4px; */
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); */
    padding: 30px;
    margin: 80px auto;
    height: 100%;
    h1 {
        color: #f5f5f6;
        font-size: 20px;
        /* display: flex;
        flex-direction: row;
        align-items: center; */
        text-align: center;
    }
`;
export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 14px;
        background: #342e47;
        color: #696a6d;
    }
`;
