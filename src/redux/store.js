import { configureStore } from '@reduxjs/toolkit';
import taskSlices from './feature/tasks/taskSlices'


const store = configureStore({
    reducer: {
        taskSlices: taskSlices,
    }
})

export default store;