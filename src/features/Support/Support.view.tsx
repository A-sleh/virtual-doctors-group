
export default function Support() {
  return (
    <section className="flex flex-col gap-3 bg-white dark:bg-black dark:text-white rounded-lg p-4">
      <h1 className="text-[#1579e5] font-bold text-4xl text-center mb-10">
        HI, HOW CAN WE HELPE YOU?
      </h1>
      <form className="space-y-2 ">
        <textarea
          placeholder="write your feedback here ..."
          className="w-full p-2 bg-gray-200 rounded-lg text-gray-600 min-h-[50vh] outline-none"
        ></textarea>
        <div className='flex gap-2 justify-end'>
          <input type="submit" value="Reset" className="btn-rounded bg-white text-[#1579e5] border-1 transition-all duration-300 border-[#1579e5] hover:bg-[#1579e5] hover:text-white" />
          <input type="submit" value="Submit" className="btn-rounded bg-[#1579e5] hover:bg-[#157ae59a] text-white transition-all duration-300 border border-[#1579e5]" />
        </div>
      </form>
    </section>
  );
}
