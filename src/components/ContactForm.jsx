import TextArea from "./TextArea";

const ContactForm = () => {
  return (
    <form className="flex flex-col bg-neutral-900 p-10 rounded-lg mx-auto w-full lg:w-2/3 xl:w-1/2 gap-5">
      <h1 className="text-center text-2xl">Contact Form</h1>
      <div className="flex flex-col">
        <label htmlFor="nameField" className="m-2">
          Full Name
        </label>
        <input
          id="nameField"
          name="nameField"
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded-md text-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="emailField" className="m-2">
          Email
        </label>
        <input
          id="emailField"
          name="emailField"
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md text-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subjectField" className="m-2">
          Subject
        </label>
        <input
          id="subjectField"
          name="subjectField"
          type="text"
          placeholder="Enter the subject"
          className="p-2 rounded-md text-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="messageField" className="m-2">
          Message
        </label>
        <TextArea
          id="messageField"
          name="messageField"
          placeholder="Enter your message"
          className="p-2 rounded-md text-black"
          rows={3}
        />
      </div>
    </form>
  );
};
export default ContactForm;
