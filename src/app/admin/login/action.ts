"use server";

import {LoginFormValues} from "@/shared/components/forms/auth/login.form";
import {getFilteredUsers} from "@/lib/firebase/queries/get-user.query";
import {verify} from "argon2";
import {randomUUID} from "node:crypto";
import {addDataWithCustomId} from "@/lib/firebase/firebase";
import {CONSTANTS} from "@/shared/consts/consts.consts";
import {cookies} from "next/headers";
import {ms} from "@/shared/util/ms.util";

export async function LoginAction(data: LoginFormValues) {
    if (!data.login || !data.password) {
        return { success: false, message: "Bad request" };
    }

    const users = await getFilteredUsers("email", data.login);
    const user = users[0];
    if (!user) {
        return { success: false, message: "Not found" };
    }

    console.log(user);

    const isPasswordMatch = await verify(user.password,data.password);
    if (!isPasswordMatch) {
        return { success: false, message: "Invalid credentials, password incorrect" };
    }

    const sessionId = randomUUID();

    const session = {
        userId: users[0].id,
        createdAt: Date.now(),
    };

    await addDataWithCustomId("sessions", sessionId, session);

     (await cookies()).set("session", sessionId, {
        httpOnly: CONSTANTS.SESSION.httpOnly,
        path: "/",
        secure: CONSTANTS.SESSION.secure,
        sameSite: CONSTANTS.SESSION.sameSite,
        maxAge: ms(CONSTANTS.SESSION.maxAge) / 1000,
    });

    return { success: true };
}