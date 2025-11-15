import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./MockForm.module.css";
import DOMPurify from "../../../dompurifyConfig";

type FormValues = {
  name: string;
  email: string;
  introducer?: string;
  message?: string;
};

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleinputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const reset = (): void => {
    setValue(initialValue);
  };

  return { value, handleinputChange, reset };
};

const MockForm = (): React.JSX.Element => {
  const nameInput = useInput("");
  const emailInput = useInput("");
  const introducerInput = useInput("");
  const messageInput = useInput("");

  const clearFields = (): void => {
    nameInput.reset();
    emailInput.reset();
    introducerInput.reset();
    messageInput.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const values: FormValues = {
      name: DOMPurify.sanitize(nameInput.value),
      email: DOMPurify.sanitize(emailInput.value),
      introducer: introducerInput.value
        ? DOMPurify.sanitize(introducerInput.value)
        : undefined,
      message: messageInput.value
        ? DOMPurify.sanitize(messageInput.value)
        : undefined,
    };

    // No op placeholder until API call implemented
    console.log(values);
    clearFields();
  };

  /* ---- Example try catch block for future API call to middleware & database ----

async function postContact(values: FormValues): Promise<void> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      throw new Error(`Server error: ${res.status} ${res.statusText}`);
    }
    // handle success (e.g. show confirmation, reset form)
  } catch (err) {
    console.error("Submission failed", err);
    // render error message
  }
}
*/

  return (
    <>
      <h3 className={styles.formVisualTitle}>CONTACT US</h3>

      <form
        className={styles.form}
        aria-labelledby="contact-form-title"
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.fieldset}>
          <legend id="contact-form-title" className="sr-only">
            Contact Us:
          </legend>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name<span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              onChange={nameInput.handleinputChange}
              value={nameInput.value}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email<span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={emailInput.handleinputChange}
              value={emailInput.value}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="introducer" className={styles.label}>
              Name of Introducer or Adviser
            </label>
            <input
              type="text"
              id="introducer"
              name="introducer"
              onChange={introducerInput.handleinputChange}
              value={introducerInput.value}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={messageInput.handleinputChange}
              value={messageInput.value}
              className={styles.textarea}
            />
          </div>
          <button
            type="submit"
            className={`${styles.submitButton} interactive button--primary`}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default MockForm;
