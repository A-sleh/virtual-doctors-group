import { IUserResponse } from '../api/useUser';

const USER_LOCALSTORAGE_KEY = 'user_info';

function getUser(): IUserResponse | null {
  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return user ? JSON.parse(user) : null;
}

function saveUser(data: IUserResponse): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
}

function removeUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
export const userLocalStorage = {
  removeUser,
  saveUser,
  getUser,
};
