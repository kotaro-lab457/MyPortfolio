import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";
import moment from "moment";
import shortid from "shortid";

import { useSelector } from "react-redux";
import { selectUser } from "../stores/userSlice";

import { COMMENT } from "../module/Text.module";
import {
  CommentFont,
  TimeFont,
  CommentUserFont,
  CommentsFont,
} from "../ui/atoms/font";
import {
  CancelButton,
  CommentButton,
  CommentsMenuButton,
  CommentsDeleteButton,
} from "../ui/atoms/button";
import { CommentInput } from "../ui/atoms/input";
import {
  TableFormComment,
  TableCommentsText,
  TableCommentsMenu,
  TableCommentsDelete,
} from "../ui/molecules/TableHome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PROPS {
  list: {
    id: number;
  };
}

const Comments: React.FC<PROPS> = (props) => {
  const initialState = shortid.generate();

  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<COMMENT[]>([]);
  const [openComments, setOpenComments] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [textId, setTextId] = useState<string>(initialState);

  const user = useSelector(selectUser);

  const FS = firebase
    .firestore()
    .collection("text")
    .doc(`${props.list.id}`)
    .collection("comments");

  useEffect(() => {
    const unSub = FS.orderBy("createAt", "asc").onSnapshot((snapshot) => {
      const posts: any = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setComments(posts);
    });
    FS.get().then((doc) => {
      setCount(doc.size);
    });
    return () => {
      unSub();
    };
  }, []);

  const newComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FS.doc(`${textId}`).set({
      user: user.displayName,
      uid: user.uid,
      text: comment,
      createAt: new Date().getTime(),
      id: textId,
    });
    setComment("");
    setCount(count + 1);
    setTextId(textId);
  };

  return (
    <>
      <div>
        <div>
          <CommentFont onClick={() => setOpenComments(!openComments)}>
            コメント（{count}）{openComments ? "非表示" : "表示"}
          </CommentFont>
        </div>
        <TableFormComment onSubmit={newComment}>
          <CommentInput
            type="text"
            placeholder="コメントの追加..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <CancelButton onClick={() => setComment("")}>キャンセル</CancelButton>
          <CommentButton disabled={!comment}>送信</CommentButton>
        </TableFormComment>
        {openComments && (
          <div>
            {comments.map((list, id) => (
              <TableCommentsText key={id}>
                <div>
                  <CommentUserFont>@{list.user}</CommentUserFont>
                  <TimeFont>{moment(list.createAt).fromNow()}</TimeFont>
                  <TableCommentsMenu>
                    {list.uid === user.uid && (
                      <CommentsMenuButton
                        onClick={() => setOpenMenu(!openMenu)}
                      >
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </CommentsMenuButton>
                    )}
                    {list.uid === user.uid && (
                      <>
                        {openMenu && (
                          <TableCommentsDelete>
                            <CommentsDeleteButton
                              onClick={() =>
                                FS.doc(`${list.id}`)
                                  .delete()
                                  .then(() => setCount(count - 1))
                                  .then(() => setOpenMenu(!openMenu))
                              }
                            >
                              削除
                            </CommentsDeleteButton>
                          </TableCommentsDelete>
                        )}
                      </>
                    )}
                  </TableCommentsMenu>
                </div>
                <CommentsFont>{list.text}</CommentsFont>
              </TableCommentsText>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
