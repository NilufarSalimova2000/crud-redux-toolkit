import React from "react";
import { removeTask, editTask } from "../../redux/task-slice";
import { useDispatch } from "react-redux";

export const Card = ({ id, title }) => {
    const dispatch = useDispatch();
    return (
        <div className="w-[400px] rounded border border-[2px] border-pink-300 p-[20px] mb-[20px]">
            <h1 className="text-center mb-[20px] font-semibold text-pink-300 text-[25px]">{title}</h1>
            <div className="flex justify-center gap-[15px]">
                <button className="add_btn rounded bg-pink-400 text-[#fff] px-[15px] py-[11px]" onClick={() => dispatch(removeTask(id))}>Delete</button>
                <button className="add_btn rounded bg-green-300 text-[#fff] px-[15px] py-[11px]" onClick={() => dispatch(editTask(id))}>Edit</button>
            </div>
        </div>
    )
}