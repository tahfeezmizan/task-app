import { configureStore } from '@reduxjs/toolkit';
import taskSlices from './feature/tasks/taskSlices'


const store = configureStore({
    reducer: {
        task: taskSlices,
    }
})

export default store;