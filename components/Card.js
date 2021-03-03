import Link from "next/link";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.id}`} href="/article/[id]">
      <a>
        <div>
          <div>
            <img
              src={article.image.url}
              alt={article.image.alternativeText}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            {/* <p id="category">{article.category.name}</p> */}
            <p id="title">{article.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
