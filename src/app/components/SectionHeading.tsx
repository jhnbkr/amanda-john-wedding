type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-3xl font-light mb-4">{children}</h2>
      <div className="w-64 h-px bg-gray-300 mx-auto" />
    </div>
  );
}
