export default function Logo() {
  return (
    <section className="flex items-center justify-between sm:px-0 px-4 dark:text-white">
      <i className="bi bi-x-lg sm:hidden font-bold text-lg cursor-pointer  hover:text-red-600 transition-all duration-200 "></i>
      <div className="flex gap-2 items-center justify-center m-5 mr-0 ">
        <i className="bi bi-hospital text-[30px]"></i>
        <h3 className="font-bold text-primary  text-xl sm:hidden md:flex">
          <span className="text-black dark:text-white">C</span>ureSync
        </h3>
      </div>
    </section>
  );
}
