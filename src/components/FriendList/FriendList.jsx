import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
    <ul>
        {friends.map(({id,avatar,name,isOnline}) => (
            <li key={id}>
            <FriendListItem
            avatar={avatar}
            name={name}
                isOnline={isOnline} />
            </li>))}   
    </ul>
)
};

FriendList.protoTypes = {
    id: PropTypes.number.isRequired,
};