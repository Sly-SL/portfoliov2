import {BasicH1} from "@/shared/components/libs/basic/text/h1.text";
import {CONSTANTS} from "@/shared/consts/consts.consts";
import {CommentForm} from "@/shared/components/forms/comment.form";
import type {CommentBodyProps} from "@/shared/types/comment-body.type";
import WeAreChangingForYou from "@/shared/components/custom/we-are-changing-for-you.custom";
import {getCommentsQuery} from "@/lib/firebase/queries/get-comments.query";
import {CommentBody} from "@/shared/components/custom/body/comments/comment.body";

const Comments = async () => {
    const data = await getCommentsQuery()

    return (
        <article>
            <BasicH1 className="flex md:text-4xl text-xl p-4 md:p-12">
                Tylko sprawdzone opinie{" :"}
                <span className="pl-2 text-purple-400">{data.length}</span>
            </BasicH1>
            <section className={"grid grid-cols-1 lg:grid-cols-2 pt-5 p-8 gap-3"}>
                {CONSTANTS.IS_BETA ? <WeAreChangingForYou description={"Niedługo każdy klient będzie mógł zostawić komentarz"}/> :
                    <article className={"pt-5"}>
                        <CommentForm/>
                    </article>}
                {data.length > 0 &&
                    data.map((comment: CommentBodyProps, i) => (
                        <div
                            key={i}
                            className="hover:scale-[1.02] duration-300"
                        >
                            <CommentBody {...comment} />
                        </div>
                    ))
                }
            </section>
        </article>
    );
};

export default Comments;