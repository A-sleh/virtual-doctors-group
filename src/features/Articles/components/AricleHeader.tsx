import AnimateDownEffect from "@/lib/Animation/AnimateDownEffect";

export default function AricleHeader() {
  return (
    <AnimateDownEffect className="sub-header flex justify-between">
      <h2 className=" dark:bg-black dark:text-white font-bold">
        <span className="text-primary">50</span> Articles
      </h2>
      <div>
        <select className="px-2 pr-5 py-0.5 text-xl bg-primary rounded-md text-white font-normal outline-none h-fit ">
          <option value="All">All</option>
        </select>
      </div>
    </AnimateDownEffect>
  );
}
