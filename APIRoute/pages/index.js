import { useRef } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
  };
  return (
    <div>
      <h2>This is Home Page</h2>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}
