import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, createUser } from '../../api/services/userService';

interface UserState {
    users: { id: string; name: string; email: string }[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const loadUsers = createAsyncThunk('user/loadUsers', async () => {
    const users = await fetchUsers();
    return users;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        });
    },
});

export default userSlice.reducer;
