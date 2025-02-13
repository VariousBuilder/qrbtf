"use server";

import * as jose from "jose";
import { cookies } from "next/headers";
import { cache } from "react";
import { COOKIE_KEY, UserPayload } from ".";
import { QrbtfUser } from "../common";
import { checkAndUpdateUser } from "@/app/api/user/service";

if (!process.env.SESSION_SECRET) {
  throw "No SESSION_SECRET";
}

const SECRET_KEY = process.env.SESSION_SECRET;

export const getServerSession = cache(
  async (): Promise<QrbtfUser | undefined> => {
    const cookie = (await cookies()).get(COOKIE_KEY)?.value;
    const session = await decrypt(cookie);
    if (session) {
      const qrbtfUserData = await checkAndUpdateUser(session.id);
      return {
        ...session,
        ...qrbtfUserData,
      };
    }
  },
);

export async function decrypt(token = "") {
  try {
    const decodedSecret = jose.base64url.decode(SECRET_KEY);
    const { payload } = await jose.jwtDecrypt<UserPayload>(
      token,
      decodedSecret,
    );
    return payload;
  } catch {
    // console.log("Failed to verify session", error);
  }
}
