import { article } from "../api/data";

import Article from "@/features/Articles/components/Article";
import Header from "./Header";
import { paths } from "@/config/paths";

export default function LatestArticlesSlider() {
  return (
    <section className="flex flex-col gap-2">
      <Header title="Latest articles" link={paths.app.article.getHref()} />
      <Article
        description={article.description.substr(
          0,
          Math.min(article.description.length, 400),
        )}
        doctor={article.doctor}
        title={article.title}
      />
    </section>
  );
}
