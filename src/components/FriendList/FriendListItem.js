import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? s.isActive : s.noActive;
  return (
    <li class={s.item}>
      <span className={status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="80" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
