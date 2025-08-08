import SplitText from '@/lib/Animation/AnimateText';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation } from 'react-router';

function BreadCrumb() {
  const mappingUrl = useLocation()
    .pathname.split('/')
    .filter((tag) => isNaN(+tag));

  function renderBreadeCrumb() {
    const localbreadCrump = mappingUrl;

    return localbreadCrump.map((tag, index) => {
      if (index === localbreadCrump.length - 1) {
        return (
          <SplitText
            text={tag}
            key={index}
            duration={0.3}
            className="text-primary font-bold text-xl "
          />
        );
      } else {
        return (
          <>
            <span className="font-bold text-xl">{tag}</span>
            <IoIosArrowForward size={20} className="text-primary font-bold" />
          </>
        );
      }
    });
  }
  return (
    <div className="flex gap-1 items-center capitalize">
      {renderBreadeCrumb()}
    </div>
  );
}

export default BreadCrumb;
