import Article from '@/features/Articles/components/Article';
import DiscriptionCard from './components/DiscriptionCard';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { useParams } from 'react-router';
import { useGetDoctorInfo } from './api/get-profile-info';
import DescritptionBoxSkeleton from '@/components/skeleton/profile/DescritptionBoxSkeleton';

export default function About() {
  const { id: doctorId } = useParams();
  const { doctorInfo, isPending } = useGetDoctorInfo(Number(doctorId));

  return (
    <section className="space-y-3">
      {isPending ? (
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
            <span className="text-primary">50</span> Articles
          </h2>
        </AnimateFromToRight>
        <Article
          title="veniam et magnam blanditiis"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni recusandae omnis deleniti quae. Molestiae ipsam, impedit quisquam vitae commodi culpa maxime necessitatibus ipsum sunt rerum obcaecati delectus excepturi autem inventore ullam repellat asperiores qui error! Sed necessitatibus, veniam et magnam blanditiis deleniti soluta, aliquid expedita itaque incidunt distinctio vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni recusandae omnis deleniti quae. Molestiae ipsam, impedit quisquam vitae commodi culpa maxime necessitatibus ipsum sunt rerum obcaecati delectus excepturi autem inventore ullam repellat asperiores qui error! Sed necessitatibus, veniam et magnam blanditiis deleniti soluta, aliquid expedita itaque incidunt distinctio vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni recusandae omnis deleniti quae. Molestiae ipsam, impedit quisquam vitae commodi culpa maxime necessitatibus ipsum sunt rerum obcaecati delectus excepturi autem inventore ullam repellat asperiores qui error! Sed necessitatibus, veniam et magnam blanditiis deleniti soluta, aliquid expedita itaque incidunt distinctio vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni recusandae omnis deleniti quae. Molestiae ipsam, impedit quisquam vitae commodi culpa maxime necessitatibus ipsum sunt rerum obcaecati delectus excepturi autem inventore ullam repellat asperiores qui error! Sed necessitatibus, veniam et magnam blanditiis deleniti soluta, aliquid expedita itaque incidunt distinctio vero."
          showOwner={false}
        />
      </div>
    </section>
  );
}
