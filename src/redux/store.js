import { configureStore } from '@reduxjs/toolkit';
import taskSlices from './feature/tasks/taskSlices';
import userSlices from './feature/userSlices/userSlices';

const store = configureStore({
    reducer: {
        taskSlices,
        userSlices
    }
});

export default store;
