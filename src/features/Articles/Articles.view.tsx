import Article from './components/Article';
import AricleHeader from './components/AricleHeader';

import { articles } from './api/data';

export default function Articles() {
  return (
    <section className="w-full rounded-md space-y-3  overflow-y-auto h-[100vh] pb-35">
      <AricleHeader />
      <div className="flex flex-col gap-2 overflow-y-auto h-full ">
        {articles.map((article) => (
          <Article {...article} />
        ))}
      </div>
    </section>
  );
}
