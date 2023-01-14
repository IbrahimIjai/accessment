import axios from 'axios';

const UserAPI = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

export async function getUsers() {
  try {
    const response = await axios.get(UserAPI);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
