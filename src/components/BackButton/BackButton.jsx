import { LinkBack } from '../BackButton/BackButton.styled';

const BackButton = ({ location }) => {
  return (
    <div>
      <LinkBack to={location}>Go Back</LinkBack>
    </div>
  );
};

export default BackButton;
