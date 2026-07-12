import { AddTask } from '@/components/AddTask/AddTask';
import TaskCard from '@/components/TaskCard/TaskCard';
import { getTasks } from '@/lib/task';
import React from 'react';

const TaskPage = async () => {

    const tasks =await getTasks()
    return (
        <div>
            Tasks: {tasks.length}
            <div className='mt-10 mb-10 flex justify-center items-center'>
                <AddTask></AddTask>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map((task)=> <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;