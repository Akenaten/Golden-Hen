import PropTypes from "prop-types";
import { useState } from "react";

//TODO: might have to pass-in the url for action later.
export default function FormScreen({ fields, postURL }) {
    const [values, setValue] = useState(["", ""]);
    console.log("postURL:", postURL);
    console.log("fields:", fields);

    //TODO: set the action and method later.
    return (
        <form
            className="p-3 m-2"
            onSubmit={validateInput}
            action={postURL}
            method="POST"
        >
            {fields.map((field, index) => (
                <div key={field} className="m-3">
                    {fetchInputBox({ field, values, index, setValue })}
                </div>
            ))}

            <div className="flex justify-end items-center">
                <button
                    className="btn btn-outline btn-accent mr-3"
                    type="submit"
                >
                    SUBMIT
                </button>
            </div>
        </form>
    );
}

//TODO: implement this later (if necesary). Might wanna change the parameter requirements.
function validateInput() {}

function fetchInputBox({ field, values, index, setValue }) {
    const fieldTypes = ["text", "text"];

    return (
        <div>
            <input
                type={fieldTypes[index]}
                placeholder={field}
                className="input input-bordered input-info w-full max-w-xs"
                required="required"
                value={values[index]}
                onChange={(e) => {
                    const newValues = [...values];
                    newValues[index] = e.target.value;
                    setValue(newValues);
                }}
            />
        </div>
    );
}

FormScreen.propTypes = {
    fields: PropTypes.array,
    postURL: PropTypes.string,
};
