import api from "../services/api";

export const listPosts = async () => api.get('/posts')