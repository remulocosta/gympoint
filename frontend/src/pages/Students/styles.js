import styled from 'styled-components';

export const Container = styled.div``;

export const InputIcon = styled.div`
  position: relative;

  input {
    height: 36px;

    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 40px;
    margin-left: 1rem;

    color: #999;
    font-size: 0.925rem;
  }

  i {
    position: absolute;
    left: 0;
    top: 0;
    padding: 9px 28px;
  }
`;

export const Empty = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: #444;
  text-align: center;
`;
