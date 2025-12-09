import { useState } from "react";

export default function FormSelect({ setForm, form }) {
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="form">
            <h2>プルダウン選択肢</h2>
            <form>
                <select name="design" id="design" value={form.design}
                    onChange={handleForm}>
                    <option value="" selected hidden>--1つ選択してください--</option>
                </select><br />

            </form>
        </div>
    )
}