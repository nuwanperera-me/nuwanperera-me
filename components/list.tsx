type ListProps = {
  children: React.ReactNode;
  title?: string;
};

export const List = ({ children, title }: ListProps) => {
  return (
    <section className={`h-auto w-full`}>
      {title && <h1 className="inline-flex gap-2 items-center justify-center- text-lg font-semibold text-muted-foreground"><span className="text-sm">#</span> {title}</h1>}
      <ul className="w-full flex flex-col items-center justify-center">{children}</ul>
    </section>
  );
};
