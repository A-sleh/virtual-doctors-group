import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';
import { articleProps } from '../types/article';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';
import UpdateArticle from '@/features/Doctor_Features/Models/UpdateArticle.Model';

// temp
import imgTemp from '@/assets/images/Hospital-HITN.webp';
import ConfirmModel from '@/components/models/ConfirmModel';
import { useDeleteArticle } from '../api/delete-article';
import Loader from '@/components/ui/loader/Loader';
import { SERVER_URL } from '@/config/app.config';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export default function Article({
  id,
  doctor,
  title,
  imageUrl,
  description,
  articleImage,
  showOwner = true,
}: articleProps) {
  const queryClient = useQueryClient();
  const { deleteArticle, isPending } = useDeleteArticle();

  if (isPending) {
    return <Loader variant="bars" className="text-primary" size={80} />;
  }

  return (
    <AnimateUpInView offsetValue={60} className="rounded-box relative ">
      <img
        src={`${SERVER_URL}/${articleImage}` || imgTemp}
        className="w-full h-70 rounded-lg bg-amber-300 mb-4 mr-4 float-start md:float-left md:w-[50vw] lg:w-1/3 "
      />
      {showOwner && (
        <div className="absolute top-5 left-5 md:top-0 md:left-0 md:relative">
          <DoctorVectorInfo
            name={doctor?.name}
            specility={doctor?.specility}
            imageSize={imageUrl}
            doctorId={doctor.doctorId}
          />
        </div>
      )}
      <h4 className="my-4 font-medium uppercase flex items-baseline justify-between">
        {title}
        <HasPermission allowedTo={['doctor']} userIdOut={doctor.doctorId}>
          <div className="flex gap-2">
            {/* <UpdateArticle
              initalArticleInfo={{ title, description, articleImage }}
            /> */}
            <ConfirmModel
              onConfirmClick={() =>
                deleteArticle(id, {
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: [QYERY_KEYS.articles]
                    });
                    queryClient.invalidateQueries({
                      queryKey: [QYERY_KEYS.article]
                    });
                  },
                })
              }
              description="Are you sure you want to delete your article, If not you cant click on cancle button below"
              openKey="delete-article"
            >
              <AnimateButton withInitialScale={true}>
                <RiDeleteBin6Line
                  size={25}
                  className="text-danger cursor-pointer"
                />
              </AnimateButton>
            </ConfirmModel>
          </div>
        </HasPermission>
      </h4>
      <div className="text-wrap text-gray-500">{description}</div>
    </AnimateUpInView>
  );
}
