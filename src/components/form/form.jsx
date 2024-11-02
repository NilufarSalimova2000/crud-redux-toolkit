import React from "react";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/task-slice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
    const { handleSubmit, register, reset } = useForm();
    const dispatch = useDispatch();
    const submit = (data) => {
        dispatch(addTask({...data, id: nanoid()}));
        reset();
    };
    return (
        <form className="flex gap-[15px] py-[50px]" onSubmit={handleSubmit(submit)}>
            <input className="w-[400px] border border-[2px] border-pink-300 rounded p-[10px] outline-pink-400" placeholder="Enter your name" {...register("title")} type="text" />
            <button className="rounded bg-pink-300 text-[#fff] px-[15px] py-[11px]">Add</button>
        </form>
    )
}