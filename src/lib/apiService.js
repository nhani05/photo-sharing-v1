/**
 * API Service - Handle all HTTP requests to the backend
 */

const API_BASE_URL = "http://localhost:8081/api";

/**
 * Fetch all users from the backend
 * @returns {Promise<Array>} - Array of users with _id, first_name, last_name
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/list`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

/**
 * Fetch a specific user by ID
 * @param {string} userId - The user ID
 * @returns {Promise<Object>} - User object with full details
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    return null;
  }
};

/**
 * Fetch all photos of a specific user with comments
 * @param {string} userId - The user ID
 * @returns {Promise<Array>} - Array of photo objects with comments
 */
export const fetchPhotosByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/photo/photosOfUser/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching photos for user ${userId}:`, error);
    return [];
  }
};

export default {
  fetchUsers,
  fetchUserById,
  fetchPhotosByUserId,
};
