import axios from "axios";



const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "a5f88013-e6f2-4308-b80b-fc112d723de5"}
})

export const usersAPI = {
  authUser(){
    return axiosInstance.get('auth/me')
      .then(response => response.data)
  },
  userProfile(userId, personalId) {
    return axiosInstance.get(`profile/${userId ? userId : personalId}`)
  },
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  },
  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data)
  },
  unFollowUser(userId){
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}