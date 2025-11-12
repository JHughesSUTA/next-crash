"use server";

import bcrypt from "bcrypt";
import { getCollection } from "@/lib/db";
import { RegisterFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/sessions";

export async function register(state, formData) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // validate form fields
  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If any form fields are invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }

  // extract form fields
  const { email, password } = validatedFields.data;

  // check if email is already registered
  const userCollection = await getCollection("users");
  if (!userCollection) return { errors: { email: "Server error!" } };

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return {
      errors: {
        email: "Email already exists in our database",
      },
    };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save email/password into database
  const results = await userCollection.insertOne({
    email,
    password: hashedPassword,
  });

  // Create a session
  await createSession(results.insertedId.toString());

  // Redirect
  redirect("/dashboard");

  console.log(results);
}
