import Article from './components/Article';
import AricleHeader from './components/AricleHeader';

import { articles } from './api/data';

export default function Articles() {
  return (
    <section className="space-y-3">
      <AricleHeader />
      <section className="flex flex-col gap-2.5 w-full">
        {articles.map((article) => (
          <Article {...article} />
        ))}
      </section>
    </section>
  );
}
