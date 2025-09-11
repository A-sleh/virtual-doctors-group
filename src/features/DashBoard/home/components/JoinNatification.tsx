import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { ArrayNumber } from './ArrayNumber';
import { api } from '@/lib/api-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { RequestJoinDoctor } from './RequestJoinDoctor';
import { listJoinNatification } from '../../types/dashboard';
import {
  approvePromotionClicked,
  rejectPromotion,
  rejectPromotionApi,
} from './apit/get-data';
import ConfirmModel from '@/components/models/ConfirmModel';
import Loader from '@/components/ui/loader/Loader';
import { errorToast, successToast } from '@/components/custom/toast';

// const ineterActiveDoctors: {
//     image: string;
//     name: string;
//     dateOfMessage: string;
// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     dateOfMessage: "Yasterday",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     dateOfMessage: "12 hours ago",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     dateOfMessage: "3 days ago",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     dateOfMessage: "5 days ago",
//   },
// ]

async function getDoctor() {
  const data = await api.get(`/Promotion?page=1&pageSize=20&onlyPending=false`);
  return data;
}

export function JoinNatification() {
  const { data: userPromotionsReq, isPending } = useQuery({
    queryFn: getDoctor,
    queryKey: ['promotions-request'],
  });

  const dataOfDoctors =
    userPromotionsReq?.filter((doctor) => !doctor.approvedBy) || [];
  const maxItem = 4;

  console.log(dataOfDoctors)
  if (isPending) return null;

  return (
    <div className="m-2 p-3 bg-white rounded-lg block row-span-2 relative">
      <h1 className="font-bold mb-3">Joined notices</h1>
      {dataOfDoctors?.length == 0 ? (
        <h2 className="px-1.5 py-1 text-xl text-center bg-white rounded-sm text-danger ">
          There is no upcoming promotions
        </h2>
      ) : (
        <ul className="grid gap-y-2">
          {dataOfDoctors?.slice(0, maxItem).map((join) => (
            <AnimateFromToRightInView duration={1}>
              <ListJoinNatification
                id={join.id}
                image={
                  '/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg'
                }
                name={join.fullName}
                // dateOfMessage={join.sendAt}
                key={join.doctorId}
              />
            </AnimateFromToRightInView>
          ))}
        </ul>
      )}
      {/* <ArrayNumber sizeOfArray={Math.ceil(dataOfDoctors.length / 4)} /> */}
    </div>
  );
}

function ListJoinNatification({
  image,
  name,
  dateOfMessage,
  id,
}: listJoinNatification) {
  const queryCient = useQueryClient();

  const { mutate: rejectPromotion, isPending: rejectedLoadding } = useMutation({
    mutationFn: rejectPromotionApi,
    mutationKey: ['promotion-reject'],
  });


    const { mutate: accept, isPending: acceptLoading } = useMutation({
    mutationFn: approvePromotionClicked,
    mutationKey: ['promotion-reject'],
  });

  function handleRejectClicked(promotionId: number) {
    rejectPromotion(promotionId, {
      onSuccess: () => {
        queryCient.invalidateQueries({
          queryKey: ['promotions-request'],
        });
        successToast('Promotion was rejected');
      },
      onError: () => {
        errorToast('Promotion was not rejected');
      },
    });
  }

  if (rejectedLoadding || acceptLoading) {
    return <Loader />;
  }

  return (
    <li className="flex p-2 items-center bg-third rounded-2xl">
      <img className="w-20 rounded-full ml-2 mr-4" src={image} alt="" />

      <div>
        <h4 className="mb-2">
          Dr.<span className="font-bold"> {name}</span> send membership requist
        </h4>
        <p className="text-secondary text-sm mb-2">{dateOfMessage}</p>
        <div className="btn w-fit flex gap-x-2 mb-1.5">
          {/* <button  className='bg-white text-primary button-join'>Reject</button> */}

          <ConfirmModel
            onConfirmClick={() => handleRejectClicked(id)}
            openKey="reject-promotion"
            description={'Are you sure you want to reject the request?'}
          >
            <AnimateButton
              scale={0.9}
              className="flex items-center flex-1 justify-between gap-4  cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
            >
              <button className="bg-white text-primary button-join">
                Reject
              </button>
            </AnimateButton>
          </ConfirmModel>

          <Model>
            <Model.Open opens="show-promotion">
              <AnimateButton
                scale={0.9}
                className="flex items-center flex-1 justify-between gap-4 px-2 cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
              >
                <button className="bg-primary text-white button-join">
                  Show
                </button>
              </AnimateButton>
            </Model.Open>
            <Model.Window title="Create new doctor" name="show-promotion">
              <RequestJoinDoctor
                image="/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg"
                name={'test'}
                dateOfMessage="12:30"
                description={'test'}
                speciality={'gee'}
              >
                <button
                  onClick={() => accept(id)}
                  className="bg-primary text-white button-join"
                >
                  Accept
                </button>
              </RequestJoinDoctor>
            </Model.Window>
          </Model>
        </div>
      </div>
    </li>
  );
}
