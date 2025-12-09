import { Children, useState } from "react";

export default function FormTextarea({ setForm, form }) {


    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(`コメント：${form.comment}`);
    }

    return (
        <div className="form">
            <h2>テキストエリア</h2>
            <form>
                <textarea name="comment" id="comment" rows={3} value={form.comment} onChange={handleForm} placeholder='ここに記入してください。'></textarea><br />
            </form>
        </div>
    )
}