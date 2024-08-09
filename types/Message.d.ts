export interface MessageProps {
  role: string;
  content: string;
}
export interface MessageBubbleProps extends MessageProps {
  image: string[] | string;
}
export type SendMessageButtonProps = {
  MessageSend: Function;
  Meet: string;
  ChatMeetSet: Function;
  loading: boolean;
};
export type MessageHeaderProps = {
  CharacterID: string[] | string;
  CharacterImage: string[] | string;
  chatFunc: Function;
  resetFunc: Function;
};
export type MessageBoxProps = {
  Chat: any;
  CharacterImage: string[] | string;
};
export type ContainerProps = {
  children: React.ReactNode;
};
export type AllCharacterCardProps = {
  data: {
    id: number;
    name: string;
    image: string;
    shortDescription: string;
  };
};
type ContextApiProps = {
  apiData: CharacterProps[];
  setApiData: Function;
};
