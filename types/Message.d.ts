export type MessageProps = { role: string; content: string };
export type SendMessageButtonProps = {
  MessageSend: Function;
  Meet: string;
  ChatMeetSet: Function;
  loading: boolean;
};
export type MessageHeaderProps = {
  CharacterID: string[] | string;
  chatFunc: Function;
  resetFunc: Function;
};
export type ContainerProps = {
  children: React.ReactNode;
};
