export interface PayloadProps {
  id?: string;
  author: string;
  message: string;
  time?: string;
  room?: string;
}

export interface MessageProps {
  user: boolean;
  time?: string;
  name: string;
  message: string;
}

export interface ProfileProps {
  profileName: string;
}
