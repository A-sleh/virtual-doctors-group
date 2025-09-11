import Article from './components/Article';
import AricleHeader from './components/AricleHeader';

import { useGetAllDoctorArticles } from './api/get-article';
import Loader from '@/components/ui/loader/Loader';

export default function Articles({showHeader = true}) {
  const { doctorArticles, isPending } = useGetAllDoctorArticles(null);

  if (isPending) {
    return <Loader variant="bars" className="text-primary" size={80} />;
  }

  return (
    <section className="w-full rounded-md space-y-3  overflow-y-auto h-[100vh] ">
      {showHeader && <AricleHeader count={doctorArticles?.length} />}
      <div className="flex flex-col gap-2 overflow-y-auto h-full ">
        {doctorArticles?.length == 0 ? (
          <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
            There is no articles yet
          </h2>
        ) : (
          doctorArticles?.map((article) => (
            <Article
              doctor={{
                name: article.doctorName,
                specility: article.doctorSpeciality,
                doctorId: article.doctorId
              }}
              id={article.id}
              title={article.title}
              articleImage={article.imageUrl}
              description={article.content}
            />
          ))
        )}
      </div>
    </section>
  );
}
