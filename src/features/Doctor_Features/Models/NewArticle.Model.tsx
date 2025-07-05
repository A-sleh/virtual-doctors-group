import Model from '@/components/models/Model';
import ArticleFrom from './components/ArticleFrom';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { VscDiffAdded } from "react-icons/vsc";

export default function NewArticle() {
  return (
    <Model>
      <Model.Open opens="new-article">
        <AnimateButton
          scale={0.9}
          className="flex items-center justify-center gap-4 px-2 cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
        >
          <span>New article</span>
          <VscDiffAdded size={23} className="mt-0.5" />
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Create new article" name="new-article">
        <ArticleFrom />
      </Model.Window>
    </Model>
  );
}
