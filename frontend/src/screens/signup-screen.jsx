import { useState } from "react";
import { Fragment } from "react";

export default function SignupScreen() {
    const fields = ["Username", "Password", "Verify password", "Email"];
    const [values, setValue] = useState(["", "", "", ""]);

    return (
        <div className="p-3 m-2">
            {fields.map((field, index) => (
                <Fragment key={field}>
                    {fetchInputBox({ field, values, index, setValue })}
                </Fragment>
            ))}
        </div>
    );
}

function fetchInputBox({ field, values, index, setValue }) {
    return (
        <div>
            <input
                type="text"
                placeholder={field}
                className="input input-bordered input-info w-full max-w-xs"
                values={values[index]}
                onChange={(e) => {
                    const newValues = [...values];
                    newValues[index] = e.target.value;
                    setValue(newValues);
                }}
            />
        </div>
    );
}
