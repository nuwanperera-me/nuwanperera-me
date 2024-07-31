type ListItemProp = {
  id: number;
  title: string;
  shortDescription: string;
  icon: string;
  filter?: string;
  card: {
    title: string;
    longDescription: string;
    banner: string;
    technologies?: string[];
    href: string;
  };
};

export const ListItem = ({
  id,
  title,
  shortDescription,
  icon,
  filter,
  card,
}: ListItemProp) => {
  return (
    <li key={id} className="h-auto w-full">
      <button></button>
    </li>
  );
};
