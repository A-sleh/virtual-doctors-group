import Article from '@/features/Articles/components/Article';
import DiscriptionCard from './components/DiscriptionCard';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { useParams } from 'react-router';
import { useGetDoctorInfo } from './api/get-profile-info';
import DescritptionBoxSkeleton from '@/components/skeleton/profile/DescritptionBoxSkeleton';
import { useGetAllDoctorArticles } from '@/features/Articles/api/get-article';

export default function About() {
  const { id: doctorId } = useParams();
  const { doctorInfo, isPending } = useGetDoctorInfo(Number(doctorId));
  const { doctorArticles, isPending: articlesIsFetching } =
    useGetAllDoctorArticles(doctorId);

  return (
    <section className="space-y-3">
      {isPending || articlesIsFetching ? (
        <DescritptionBoxSkeleton />
      ) : (
        <DiscriptionCard
          title={`${doctorInfo?.firstName} ${doctorInfo?.lastName}`}
          description={doctorInfo?.description}
        />
      )}

      <div className="space-y-2">
        <AnimateFromToRight>
          <h2 className="sub-header text-xl px-8">
            <span className="text-primary">{doctorArticles?.length}</span> Articles
          </h2>
        </AnimateFromToRight>
        {doctorArticles?.length === 0 ? (
          <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
            This doctor doesn't publish any article
          </h2>
        ) : (
          doctorArticles?.map((article) => {
            return (
              <Article
                doctor={{
                  name: article.doctorName,
                  specility: article.doctorSpeciality,
                }}
                id={article.id}
                title={article.title}
                articleImage={article.imageUrl}
                description={article.content}
                showOwner={false}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
