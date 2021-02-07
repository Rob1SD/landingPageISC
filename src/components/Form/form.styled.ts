import styled from "styled-components";

export const FormWrapper = styled.form`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #dbdbdb;
    box-shadow: 3px 13px 17px #aaaaaa;
    padding: 10px 30px;
    border-radius: 4px;
`;
export const FormTitle = styled.h2`
    color: #666666;
    font-family: var(--font-family);
`;
export const FormInput = styled.input`
    height: 35px;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding-left: 20px;
    font-family: var(--font-family);
`;
export const CtaWrapper = styled.div`
    display: flex;
    justify-content: center;
`;