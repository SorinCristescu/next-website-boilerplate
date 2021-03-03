import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div>
        <div>
          {leftArticles.map((article) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div>
            {rightArticles.map((article) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
