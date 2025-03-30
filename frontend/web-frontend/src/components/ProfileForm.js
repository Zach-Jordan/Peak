import React, { useState } from "react";
import { saveUserProfile } from "../services/profileServices";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveUserProfile(formData);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Failed to update profile: " + error.message);
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself"
          ></textarea>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
