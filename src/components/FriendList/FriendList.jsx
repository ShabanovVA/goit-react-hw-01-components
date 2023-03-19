import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        friends.map(({id,avatar,name,isOnline}) => (
            <FriendListItem
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}/>
        ))   
    )
};

FriendList.protoTypes = {
    friends: PropTypes.array.isRequired,
};