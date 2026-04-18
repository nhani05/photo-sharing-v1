import apiService from "./apiService";

/**
 * fetchModel - Fetch model data from the backend API.
 *
 * @param {string} url - The endpoint URL to fetch from
 * @returns {Promise} - Promise that resolves with the fetched data
 *
 */
async function fetchModel(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching model:", error);
    throw error;
  }
}

/**
 * Fetch all users
 */
export const getAllUsers = () => apiService.fetchUsers();

/**
 * Fetch a specific user by ID
 */
export const getUser = (userId) => apiService.fetchUserById(userId);

/**
 * Fetch all photos of a user
 */
export const getUserPhotos = (userId) => apiService.fetchPhotosByUserId(userId);

export default fetchModel;
