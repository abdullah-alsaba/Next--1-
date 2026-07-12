import { AddTask } from '@/components/AddTask/AddTask';
import TaskCard from '@/components/TaskCard/TaskCard';
import { addATask } from '@/lib/action';
import { getTasks } from '@/lib/task';
import React from 'react';

const TaskPage = async () => {

    const tasks =await getTasks()
    return (
      <div className=" mx-auto max-w-7xl">
            <h1 className='text-4xl font-bold mt-6'>Tasks: {tasks.length}</h1>
        <div className="mt-10 mb-10 flex justify-center items-center">
          <AddTask addATask={addATask}></AddTask>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    );
};

export default TaskPage;