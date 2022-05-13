import notificationStyles from './Notification.module.scss';

function Notification({ text }) {
  return (
    <p className={notificationStyles.notification}>{text}</p>
  );
}

export default Notification;