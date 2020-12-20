import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form } from "react-final-form";
import { TextInput, Field } from "../../components/forms";
import required from "../../components/forms/validations/required";
import number from "../../components/forms/validations/number";
import ADD_RESIDENCE from "../../apollo/mutations/add-residence";

const AddResidences = () => {
  const [created, hasCreated] = useState(false);
  const [createResidence, { error, data }] = useMutation(ADD_RESIDENCE, {
    onCompleted: () => {
      hasCreated(true);
    },
    onError: () => {
      hasCreated(false);
    },
  });

  const onSubmit = (values) => {
    createResidence({ variables: { values } });
  };

  if (error) {
    return <div>COULD NOT CREATE RESIDENCE</div>;
  }

  return (
    <div className="add-residences">
      // todo: a notification or a modal would be nice
      {created && (
        <div>Added residence with ID {data && data.createResidence.id}</div>
      )}
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              component={TextInput}
              name="zipCode"
              label="Zip Code"
              required
              validate={[required, number]}
            />
            <Field
              component={TextInput}
              name="number"
              label="Number"
              required
              validate={[required, number]}
            />
            <Field
              component={TextInput}
              name="latitude"
              label="Latitude"
              required
              validate={[required, number]}
            />
            <Field
              component={TextInput}
              name="longitude"
              label="Longitude"
              required
              validate={[required, number]}
            />
            <Field
              component={TextInput}
              name="numberOfResidences"
              label="Number of residences"
              required
              validate={[required, number]}
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
