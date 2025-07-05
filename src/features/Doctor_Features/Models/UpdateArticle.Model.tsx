import Model from '@/components/models/Model';
import ArticleFrom from './components/ArticleFrom';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { RiSettings5Fill } from 'react-icons/ri';

export default function UpdateArticle() {
  return (
    <Model>
      <Model.Open opens="update-article">
        <AnimateButton withInitialScale={true}>
          <RiSettings5Fill size={25} className="text-primary cursor-pointer" />
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Update article details" name="update-article">
        <ArticleFrom />
      </Model.Window>
    </Model>
  );
}
