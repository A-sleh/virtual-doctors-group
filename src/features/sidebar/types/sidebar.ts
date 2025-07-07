export type link = {
  icon: React.ReactNode;
  title: string;
  permission: string[];
  path: {
    admin?: string;
    patient?: string;
    doctor?: string;
  };
};

export type links = link[];

export type linksProps = {
  links: links;
  sideBarStatus: boolean;
};
