import PropTypes from "prop-types";
import { useState } from "react";

//TODO: might have to pass-in the url for action later.
export default function FormScreen({ fields, postURL }) {
    const [values, setValues] = useState(fields.map(() => ""));

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
                    {fetchInputBox({ field, values, index, setValues })}
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

//TODO: change this later for posting the request.
function validateInput(e) {
    e.preventDefault();
    location.reload();
}

function getFieldType(field) {
    switch (field.toLowerCase()) {
        case "email":
            return "email";
        default:
            return "text";
    }
}

function fetchInputBox({ field, values, index, setValues }) {
    return (
        <div>
            <input
                type={getFieldType(field)}
                placeholder={field}
                className="input input-bordered input-info w-full max-w-xs"
                required="required"
                value={values[index]}
                onChange={(e) => {
                    const newValues = [...values];
                    newValues[index] = e.target.value;
                    setValues(newValues);
                }}
            />
        </div>
    );
}

FormScreen.propTypes = {
    fields: PropTypes.array,
    postURL: PropTypes.string,
};
