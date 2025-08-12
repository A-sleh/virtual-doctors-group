import ConfirmModel from '@/components/models/ConfirmModel';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { useUpdateConsultaion } from '../api/update-consultaion';
import { useDeleteConsultaion } from '../api/delete-consultaion';

export default function RenderButtons({
  status,
  consultId,
}: {
  status: string;
  consultId: number;
}) {
  const { isPending, updateConsultaionState } = useUpdateConsultaion();
  const { isPending: isDeleting, deleteConsultaion } = useDeleteConsultaion();

  if (isPending || isDeleting) return <h1>Lodding ...</h1>;

  switch (status) {
    case 'Pending':
      return (
        <>
          <HasPermission allowedTo={['patient']}>
            <ConfirmModel
              onConfirmClick={() => deleteConsultaion(consultId)}
              description="Are you sure you want to Cancel this consultaion, If not you can click on cancel button below"
              openKey="close-consultaion"
            >
              <AnimateButton
                scale={0.9}
                className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
              >
                Cancel
              </AnimateButton>
            </ConfirmModel>
          </HasPermission>
          <HasPermission allowedTo={['doctor']}>
            <div className="flex gap-2">
              <AnimateButton
                scale={0.9}
                onClick={() =>
                  updateConsultaionState({
                    consultId,
                    changeStatusTo: 'Accept',
                  })
                }
                className="btn-rounded text-white bg-fourth border-1 transition-all duration-100  hover:bg-fourth-hover hover:text-fourth "
              >
                Accept
              </AnimateButton>
              <ConfirmModel
                onConfirmClick={() =>
                  updateConsultaionState({
                    consultId,
                    changeStatusTo: 'Reject',
                  })
                }
                description="Are you sure you want to Cancel this consultaion, If not you can click on cancel button below"
                openKey="close-consultaion"
              >
                <AnimateButton
                  scale={0.9}
                  className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
                >
                  Reject
                </AnimateButton>
              </ConfirmModel>
            </div>
          </HasPermission>
        </>
      );

    case 'Opened':
      return (
        <HasPermission allowedTo={['doctor']}>
          <ConfirmModel
            onConfirmClick={() =>
              updateConsultaionState({ consultId, changeStatusTo: 'Close' })
            }
            description="Are you sure you want to close this consultaion, If not you can click on cancel button below"
            openKey="close-consultaion"
          >
            <AnimateButton
              scale={0.9}
              className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
            >
              Close
            </AnimateButton>
          </ConfirmModel>
        </HasPermission>
      );

    case 'Closed':
      return (
        <HasPermission allowedTo={['doctor']}>
          <ConfirmModel
            onConfirmClick={() => deleteConsultaion(consultId)}
            description="Are you sure you want to delete this consultaion, If not you can click on cancel button below"
            openKey="close-consultaion"
          >
            <AnimateButton
              scale={0.9}
              className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
            >
              Delete
            </AnimateButton>
          </ConfirmModel>
        </HasPermission>
      );
      break;
  }
}
