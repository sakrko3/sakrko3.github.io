type Props = { name: string };

const SectionHeader = ({ name }: Props) => {
  return (
    <h3 className="absolute z-20 tracking-[12px] md:tracking-[24px] uppercase text-slate-500 text-xl md:text-2xl left-1/2 top-[10%] -translate-x-1/2 -translate-y-[10%]">
      {name}
    </h3>
  );
};

export default SectionHeader;
