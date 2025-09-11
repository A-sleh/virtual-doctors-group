import { article } from '../api/data';

import Article from '@/features/Articles/components/Article';
import Header from './Header';
import { paths } from '@/config/paths';
import Articles from '@/features/Articles/Articles.view';

export default function LatestArticlesSlider() {
  return (
    <section className="flex flex-col gap-2">
      <Header title="Latest articles" link={paths.app.article.getHref()} />
      <div className="overflow-auto max-h-[20rem] ">
        <Articles showHeader={false} />
      </div>
    </section>
  );
}
