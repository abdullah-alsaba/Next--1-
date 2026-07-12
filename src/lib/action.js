import { revalidatePath } from "next/cache";

import {postTask} from "./task"
import { redirect } from "next/navigation";

export const addATask = async(formData) => {
    'use server'
   
    
    const newTask = Object.fromEntries(formData.entries());

    const res = await postTask(newTask);

    if (res.ok) {
        revalidatePath("/tasks")
        redirect("/task")
    }
    return res;
}