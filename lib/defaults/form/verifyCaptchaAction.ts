"use server";

import axios from "axios";

export async function verifyCaptchaAction(token: string) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );
  console.log(res.data.score);
  return res.data.score;
}
