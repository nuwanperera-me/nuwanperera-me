type ListProps = {
  children: React.ReactNode;
  title?: string;
};

export const List = ({ children, title }: ListProps) => {
  return (
    <div className="h-auto w-full">
      {title && (
        <h1 id={title.replaceAll(" ", "-")} className="mb-4 inline-flex items-center gap-2 text-lg font-semibold text-muted-foreground">
          <span className="select-none text-2xl text-stroke">#</span> {title}
        </h1>
      )}
      <ul className="flex w-full flex-col items-center justify-center">
        {children}
      </ul>
    </div>
  );
};
