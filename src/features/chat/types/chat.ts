export type message = {
  ownerId: number;
  message: string;
  time: string;
};

export type messagesProps = {
    messages: message[]
}

type chat = {
  date: string;
  messages: message[];
};

export type chatContent = chat[]


