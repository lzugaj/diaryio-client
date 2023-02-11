export interface NoteRequest {
  title: string;
  description: string;
  location: string;
  eventDate: Date | null | any; // TODO: Any data type sucks
}

export interface NoteResponse {
  id: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
}
