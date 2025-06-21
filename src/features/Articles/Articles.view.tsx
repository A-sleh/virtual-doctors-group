import { articles } from './api/data';
import Article, { articleProps } from './components/Article';

export default function Articles() {
  return (
    <section className="space-y-3">
      <div className="sub-header flex justify-between">
        <h2 className=" dark:bg-black dark:text-white font-bold">
          <span className="text-[#1579e5]">50</span> Articles
        </h2>
        <div>
          <select className="px-2 pr-5 py-0.5 text-xl bg-[#1579e5] rounded-md text-white font-normal outline-none h-fit ">
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <section className="flex flex-col gap-2.5 w-full">
        {articles.map((article: articleProps) => {
          const { doctor, description, title } = article;
          return (
            <Article doctor={doctor} title={title} description={description} />
          );
        })}
      </section>
    </section>
  );
}
