interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
}

interface LoginUser {
  email: string;
  password: string;
}

export const getUsers = (): User[] => {
  const users = localStorage.getItem('medconnect_users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]): void => {
  localStorage.setItem('medconnect_users', JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  const currentUser = localStorage.getItem('medconnect_current_user');
  return currentUser ? JSON.parse(currentUser) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem('medconnect_current_user', JSON.stringify(user));
};

export const logout = (): void => {
  localStorage.removeItem('medconnect_current_user');
};

export const registerUser = (userData: Omit<User, 'id' | 'createdAt'>): { success: boolean; message: string; user?: User } => {
  const users = getUsers();
  
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    return { success: false, message: 'User with this email already exists' };
  }

  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  
  return { success: true, message: 'Registration successful', user: newUser };
};

export const loginUser = (loginData: LoginUser): { success: boolean; message: string; user?: User } => {
  const users = getUsers();
  
  const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
  
  if (user) {
    setCurrentUser(user);
    return { success: true, message: 'Login successful', user };
  }
  
  return { success: false, message: 'Invalid email or password' };
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};