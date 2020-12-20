import React from "react";
import { Form } from "react-final-form";
import { TextInput, Field } from "../../components/forms";
import required from "../../components/forms/validations/required";
import number from "../../components/forms/validations/number";

const AddResidences = () => {
  const onSubmit = () => {
    console.log("on Submit");
  };

  const validate = () => {
    console.log("validate");
  };

  return (
    <div className="add-residences">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              component={TextInput}
              name="zipCode"
              label="Zip Code"
              required
              validate={[required, number]}
              messages={[{ type: "error", children: "SOME ERROR" }]}
            />
            <Field
              component={TextInput}
              name="number"
              label="Number"
              required
            />
            <Field
              component={TextInput}
              name="latitude"
              label="Latitude"
              required
            />
            <Field
              component={TextInput}
              name="longitude"
              label="Longitude"
              required
            />
            <Field
              component={TextInput}
              name="numberOfResidences"
              label="Number of residences"
              required
            />

            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button type="button" onClick={form.reset} disabled={submitting}>
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default AddResidences;
