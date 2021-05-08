import React, { useEffect, useState } from "react";
import firebase from "../util/firebase";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState();

  useEffect(() => {
    const articleRef = firebase.database().ref("Articles");
    articleRef.on("value", (snapshot) => {
      const articles = snapshot.val();
      const articlesList = [];
      for (let id in articles) {
        articlesList.push(articles[id]);
      }
      setArticlesList(articlesList);
    });
  }, []);
  return (
    <>
      {articlesList
        ? articlesList.map((article) => {
            return (
              <div
                key={article.id}
                className="article"
                style={{ borderBottom: "1px solid #000" }}
              >
                <h4>{article.title}</h4>
                <p>{article.text}</p>
              </div>
            );
          })
        : ""}
    </>
  );
}
