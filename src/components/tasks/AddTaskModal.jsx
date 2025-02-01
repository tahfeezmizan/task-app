import React from 'react';
import Modal from '../ui/Modal';
import { set, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/feature/tasks/taskSlices';

export default function AddTaskModal({ isOpen, setIsOpen }) {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data))
        onCancel();
    }

    return (

        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"Hello Goribera"}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 pt-4'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className='text-lg font-semibold'>Title</label>
                    <input type="text" id='title' className='w-full rounded' {...register("title")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className='text-lg font-semibold'>Description</label>
                    <input type="text" id='description' className='w-full rounded' {...register("description")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="date" className='text-lg font-semibold'>Date</label>
                    <input type="date" id='date' className='w-full rounded' {...register("date")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label for="assingTo">Assing to:</label>
                    <select name="assingTo"
                        id="assingTo"
                        className='w-full rounded'
                        {...register("assingTo")}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                        <option value="Charlie">Charlie</option>
                        <option value="Diana">Diana</option>
                        <option value="Eve">Eve</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label for="priority">Priority</label>
                    <select name="priority"
                        id="priority"
                        className='w-full rounded'
                        {...register("priority")} >
                        <option value="high">High</option>
                        <option value="medium">medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex items-center justify-center gap-5 pt-4">
                    <button onClick={() => onCancel()} type="button" className='px-6 py-2 border rounded-md bg-red-500 text-white font-medium'>Cancel</button>

                    <button type="submit" className='px-6 py-2 border rounded-md bg-blue-500 text-white font-medium'>Submit</button>
                </div>
            </form>
        </Modal>
    )
}
