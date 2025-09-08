export type message = {
  ownerId: number;
  text: string;
  date: Date;
};

export type messagesProps = {
    messages: message[]
}

type chat = {
  date: string;
  messages: message[];
};

export type chatContent = chat[]


