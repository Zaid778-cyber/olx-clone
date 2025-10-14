import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ProductForm.module.css";
import { toast } from "react-toastify";

export default function ProductForm({ addProduct }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addProduct(data);
    toast.success("Product added");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h3>Add product</h3>
      <input
        placeholder="Name"
        {...register("name", { required: "Name required" })}
      />
      {errors.name && (
        <small className={styles.err}>{errors.name.message}</small>
      )}

      <input
        placeholder="Price"
        type="number"
        step="0.01"
        {...register("price", { required: "Price required" })}
      />
      {errors.price && (
        <small className={styles.err}>{errors.price.message}</small>
      )}

      <input placeholder="Image URL (optional)" {...register("image")} />

      <textarea
        placeholder="Short description"
        {...register("desc")}
      ></textarea>

      <button type="submit" className={styles.btn}>
        Add
      </button>
    </form>
  );
}
