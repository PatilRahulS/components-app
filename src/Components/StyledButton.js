import { Button } from 'reactstrap';
import styled from 'styled-components';

const CommonButton = styled(Button)`
  color: ${(props) => (props.textColor ? props.textColor : '#fff')} !important;
  background-color: ${(props) =>
    props.color ? props.color : '#1e8cab'} !important;
  border-color: ${(props) =>
    props.bordercolor ? props.bordercolor : '#1e8cab'} !important;
  text-transform: ${(props) => (props.caps === 'true' ? 'uppercase' : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')} !important;
  &:hover {
    background-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
    border-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
  }
  &:focus {
    background-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
    border-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
  }
  &:active {
    background-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
    border-color: ${(props) =>
      props.color ? props.color : '#1e8cab'} !important;
  }

  &&:disabled {
    background-color: #9ad3db !important;
    border-color: #9ad3db !important;
    color: #283233 !important;
  }
`;

export { CommonButton };
