import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Registration.module.css";

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Registration failed ⚠️", {
          position: "top-center",
          theme: "colored",
        });
        return;
      }

      toast.success("🎉 Registration Successful!", {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });

      reset();
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again later.", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📝 Create Your Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className={styles.error}>{errors.fullName.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>
          <select {...register("gender", { required: "Select a gender" })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className={styles.error}>{errors.gender.message}</p>
          )}
        </div>

        <div className={`${styles.formGroup} ${styles.checkbox}`}>
          <input
            type="checkbox"
            {...register("terms", { required: "You must agree to continue" })}
          />
          <label>I agree to the terms & conditions</label>
        </div>
        {errors.terms && <p className={styles.error}>{errors.terms.message}</p>}

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}
