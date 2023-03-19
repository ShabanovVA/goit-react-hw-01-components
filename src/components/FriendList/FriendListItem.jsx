import PropTypes from 'prop-types';
import { Avatar, Name, Status, Wrapper } from './FriendListItem.styled';

export const FriendListItem = ({id,avatar, name, isOnline }) => {
    return (
        <Wrapper key={id}>
        <Status statusUser={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt='User avatar' />
        <Name>{name}</Name>
        </Wrapper>
    )
};

FriendListItem.propTypes = {
  id:PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};