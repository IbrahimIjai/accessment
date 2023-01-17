import axios from 'axios';

const UserAPI = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/';

export async function getUsersDetails(userId) {
  try {
    const response = await axios.get(UserAPI + userId);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
