import axios from "axios";



const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "c37c9f30-aa36-4862-924a-b0718f3e4b84"}
})

export const usersAPI = {
  authUser(){
    return axiosInstance.get('auth/me')
      .then(response => response.data)
  },
  userProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
  },
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  },
  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data)
  },
  unfollowUser(userId){
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}
export const profileAPI = {
  userProfile(userId, personalId) {
    return axiosInstance.get(`profile/${userId ? userId : personalId}`)
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return axiosInstance.put(`profile/status`, {status})
  }
}
export const authAPI = {
  authUser(){
    return axiosInstance.get('auth/me')
      .then(response => response.data)
  },
  login(email, password, rememberMe = false){
    return axiosInstance.post('auth/login',{ email,  password, rememberMe})
  },
  logout(){
    return axiosInstance.delete('auth/login')
  }
}


