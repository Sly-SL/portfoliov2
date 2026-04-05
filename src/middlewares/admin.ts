import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import {getSessionQuery} from "@/lib/firebase/queries/get-session.query";
import {getFilteredUsers} from "@/lib/firebase/queries/get-user.query";

export async function AdminMiddleware(req?: NextRequest) {
    let sessionId: string | undefined;

    if (req) {
        sessionId = req.cookies.get("sessionId")?.value;
    } else {
        const cookieStore = await cookies();
        sessionId = cookieStore.get("sessionId")?.value;
    }

    if (!sessionId) {
        return NextResponse.redirect(new URL(shortcuts.pnf));
    }

    const session = await getSessionQuery(sessionId);

    if (!session?.success) {
        return NextResponse.redirect(new URL(shortcuts.pnf));
    }

    const users = await getFilteredUsers("id", session.data.userId);

    if (!users.length) {
        return NextResponse.redirect(new URL(shortcuts.pnf));
    }

    const user = users[0];

    if (!user.admin) {
        return NextResponse.redirect(new URL(shortcuts.pnf));
    }

    return NextResponse.next({status: 200});
}