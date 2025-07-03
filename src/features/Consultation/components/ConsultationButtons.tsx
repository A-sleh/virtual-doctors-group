import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';

export default function RenderButtons({ status }: { status: string }) {
  switch (status) {
    case 'pending':
      return (
        <>
          <HasPermission allowedTo={['patient']}>
            <AnimateButton
              scale={0.9}
              className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
            >
              Cancel
            </AnimateButton>
          </HasPermission>
          <HasPermission allowedTo={['doctor']}>
            <div className="flex gap-2">
              <AnimateButton
                scale={0.9}
                className="btn-rounded text-white bg-fourth border-1 transition-all duration-100  hover:bg-fourth-hover hover:text-fourth "
              >
                Accept
              </AnimateButton>
              <AnimateButton
                scale={0.9}
                className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
              >
                Reject
              </AnimateButton>
            </div>
          </HasPermission>
        </>
      );

    case 'opened':
      return (
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton
            scale={0.9}
            className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
          >
            Close
          </AnimateButton>
        </HasPermission>
      );
    case 'closed':
      return (
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton
            scale={0.9}
            className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
          >
            Delete
          </AnimateButton>
        </HasPermission>
      );
      break;
  }
}
