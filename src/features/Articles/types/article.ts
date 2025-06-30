export type articleProps = {
  doctor?: {
    name: string;
    specility: string;
  };
  title: string;
  description: string;
  articleImage?: string;
  showOwner?: boolean;
};
