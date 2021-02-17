import React, { useState, useContext, useEffect } from "react";
import firebase from "../config/Firebase";

import { AuthContext } from "../AuthService";

const SetUp: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const user = useContext(AuthContext);

  const FS = firebase.firestore().collection("text");

  //let currentID = 0;
  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    FS.doc(`${count}`).set({
      user: user.displayName,
      books: title,
      content: comment,
      pages: page,
      date: new Date(),
      uid: user.uid,
      id: count,
    });
    setComment("");
    setTitle("");
    setPage("");
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h1>アウトプット 作成ページ</h1>
      <form onSubmit={handleComment}>
        <div>
          <p>読んだ本は？</p>
          <input
            id="add"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>何ページ読んだか？</p>
          <label>
            P:
            <input
              id="add"
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </label>
          <p>感想＆要約</p>
          <textarea
            id="add"
            placeholder="コメント入力"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button>投稿</button>
      </form>
    </>
  );
};

export default SetUp;
