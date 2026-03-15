import { useState } from "react";
import "./SubscribeForm.css";

function SubscribeForm() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.firstName || !form.lastName) {
      setMessage("Please fill all fields.");
      return;
    }

    const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    const exists = subscribers.find((sub) => sub.email === form.email);

    if (exists) {
      setMessage("You are already subscribed!");
      return;
    }

    subscribers.push(form);

    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    setMessage("Subscription successful!");

    setForm({
      email: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div className="subscribe-box">
      <h2 className="subscribe-title">Join the Reading Circle</h2>
      <p className="subscribe-text">Sign up for our newsletter to get updates on the latest book reviews, author spotlights, and exclusive reading lists.</p>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Enter your Gmail" value={form.email} onChange={handleChange}/>
        <label htmlFor="first-name">First Name</label>
        <input  type="text" name="firstName" id="first-name" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="lastName" id="last-name" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <button type="submit">Subscribe</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default SubscribeForm;
