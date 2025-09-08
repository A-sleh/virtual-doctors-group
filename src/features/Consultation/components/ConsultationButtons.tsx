import ConfirmModel from '@/components/models/ConfirmModel';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { useUpdateConsultaion } from '../api/update-consultaion';
import { useDeleteConsultaion } from '../api/delete-consultaion';
import Loader from '@/components/ui/loader/Loader';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export default function RenderButtons({
  status,
  consultId,
}: {
  status: string;
  consultId: number;
}) {
  const queryClient = useQueryClient();

  const { isPending, updateConsultaionState } = useUpdateConsultaion();
  const { isPending: isDeleting, deleteConsultaion } = useDeleteConsultaion();

  if (isPending || isDeleting) return <Loader />;

  function reFrechTheConsultaions() {
    queryClient.invalidateQueries({
      queryKey: [QYERY_KEYS.consultaions],
    });
  }

  function handleUpdateConsultaionClicked(
    changTo: 'Accept' | 'Reject' | 'Close',
  ) {
    updateConsultaionState(
      {
        consultId,
        changeStatusTo: changTo,
      },
      {
        onSuccess: () => {
          reFrechTheConsultaions();
        },
      },
    );
  }

  function handleDeleteClicked() {
    deleteConsultaion(consultId, {
      onSuccess: () => {
        reFrechTheConsultaions();
      },
    });
  }

  switch (status) {
    case 'Pending':
      return (
        <>
          <HasPermission allowedTo={['patient']}>
            <ConfirmModel
              onConfirmClick={handleDeleteClicked}
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
                onClick={() => handleUpdateConsultaionClicked('Accept')}
                className="btn-rounded text-white bg-fourth border-1 transition-all duration-100  hover:bg-fourth-hover hover:text-fourth "
              >
                Accept
              </AnimateButton>
              <ConfirmModel
                onConfirmClick={() => handleUpdateConsultaionClicked('Reject')}
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

    case 'Open':
      return (
        <HasPermission allowedTo={['doctor']}>
          <ConfirmModel
            onConfirmClick={() => handleUpdateConsultaionClicked('Close')}
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

    case 'Rejected':
      return (
        <ConfirmModel
          onConfirmClick={handleDeleteClicked}
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
      );
    case 'Closed':
      return (
        <HasPermission allowedTo={['doctor']} >
          <ConfirmModel
            onConfirmClick={handleDeleteClicked}
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
