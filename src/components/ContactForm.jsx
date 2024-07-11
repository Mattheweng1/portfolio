import Swal from "sweetalert2";
import TextArea from "./TextArea";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "dff04541-5386-4733-8823-b6337efa0da5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonColor: "#ef4444",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col bg-neutral-900 p-10 rounded-lg mx-auto w-full lg:w-2/3 xl:w-1/2 gap-5"
    >
      <h1 className="text-center text-2xl">Contact Form</h1>
      <div className="flex flex-col">
        <label htmlFor="nameField" className="m-2">
          Full Name
        </label>
        <input
          id="nameField"
          name="name"
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded-md text-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="emailField" className="m-2">
          Email
        </label>
        <input
          id="emailField"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md text-black"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="messageField" className="m-2">
          Message
        </label>
        <TextArea
          id="messageField"
          name="message"
          placeholder="Enter your message"
          className="p-2 rounded-md text-black"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="border-2 border-red-500 text-red-500 px-10 py-3 rounded-md font-bold mt-5"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
export default ContactForm;
