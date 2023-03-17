import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username}/>
        <p className={css.name}> {username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{new Intl.NumberFormat('en').format(stats.followers)}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{new Intl.NumberFormat('en').format(stats.views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{new Intl.NumberFormat('en').format(stats.likes)}</span>
        </li>
      </ul>
    </div>);
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
