import { useSelector } from 'react-redux';
import Userdata from './../../pages/data/user';

export default function Alert({user,message}) {
  console.log(user, message);
  const username = useSelector(state => state.user.Userdata.find( ele => ele.id == user).username);
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Hi, {username} !</strong> {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
