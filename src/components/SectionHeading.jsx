
const SectionHeading = ({ title, subtitle, bg="bg-slate-800", colour="text-white" }) => {
  return (
    <div className={`mt-[96px] md:mt-[113px] ${bg} max-md:pt-6 pt-10`}>
    <div className="max-md:py-6 py-12 max-w-7xl mx-auto md:px-16 px-8">
      <h1 className={`text-3xl md:text-5xl font-bold text-left ${colour}`}>{title}</h1>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
    </div>
  );
};

export default SectionHeading;
