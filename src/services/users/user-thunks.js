import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './user-service';
import {updateUserProfileById} from "./user-service";

export const userLoginThunk = createAsyncThunk(
    '/login',
    async (user) => await service.userLogin(user)
)

export const userLogoutThunk = createAsyncThunk(
    '/logout',
    async () => await service.userLogout()
)

export const userProfileThunk = createAsyncThunk(
    '/profile',
    async () => await service.userProfile()
)

export const userRegisterThunk = createAsyncThunk(
    '/register',
    async (user) => await service.userRegister(user)
)
export const getAllUsersThunk = createAsyncThunk(
    '/getAllUsers',
    async () => await service.getAllUsers()
)
export const getAllAdminUsersThunk = createAsyncThunk(
    '/getAllAdminUsers',
    async () => await service.getAllAdminUsers()
)
export const getAllFanUsersThunk = createAsyncThunk(
    '/getAllFanUsers',
    async () => await service.getAllFanUsers()
)
export const getAllAuthorsThunk = createAsyncThunk(
    '/getAllForumAuthors',
    async () => await service.getAllAuthorUsers()
)

export const getUserByUsernameThunk = createAsyncThunk(
    '/findUserByUsername',
    async (username) => await service.getUserByName(username)
)
export const deleteUserByIdThunk = createAsyncThunk(
    '/deleteUser',
    async (userId) => {
        await service.deleteUserById(userId);
        return userId;
    }
)
export const updateUserProfileByIdThunk = createAsyncThunk(
    '/updateUserProfileById',
    async (user) => await service.updateUserProfileById(user._id, user)
)