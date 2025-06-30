import Article from '@/features/Articles/components/Article';
import DiscriptionCard from './components/DiscriptionCard';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

export default function About() {
  return (
    <section className="space-y-3">
      <DiscriptionCard title="Abdulfatah asleh" />
      <div className="space-y-2">
        <AnimateFromToRight >
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
