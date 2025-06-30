import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';

export default function Support() {
  return (
    <AnimateUpEffect className="flex flex-col gap-3 bg-white dark:bg-black dark:text-white rounded-lg p-4">
      <AnimateFromToRight className="text-primary font-bold text-4xl text-center mb-10">
        HI, HOW CAN WE HELPE YOU?
      </AnimateFromToRight>
      <form className="space-y-2 ">
        <textarea
          placeholder="write your feedback here ..."
          className="w-full p-2 bg-[#EEEEEE] rounded-lg text- min-h-[50vh] outline-none"
        ></textarea>
        <div className="flex gap-2 justify-end">
          <input
            type="submit"
            value="Reset"
            className="btn-rounded bg-white text-primary border-1 transition-all duration-300 border-primary hover:bg-primary hover:text-white"
          />
          <input
            type="submit"
            value="Submit"
            className="btn-rounded bg-primary hover:bg-[#157ae59a] text-white transition-all duration-300 border border-primary"
          />
        </div>
      </form>
    </AnimateUpEffect>
  );
}
