import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserForm } from './views/UserForm';
const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.querySelector('#root');
if (root) {
  const userForm = new UserEdit(root, user);
  userForm.render();
} else {
  throw new Error('Root does not exist');
}
