import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProfile } from '../services/profileService';

interface User {
	name: string;
	status: string;
	email: string;
}

interface UserState {
	user: User | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
	user: null,
	status: 'idle',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkAPI) => {
	const res = await getProfile();
	const data = await res.json();

	if (!res.ok) {
		return thunkAPI.rejectWithValue(data.error || 'Failed to fetch');
	}
	return data.user as User;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUser(state) {
			state.user = null;
			state.status = 'idle';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(fetchUser.rejected, (state) => {
				state.status = 'failed';
				state.user = null;
			});
	},
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
