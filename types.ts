export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  coverUrl: string;
  spotifyLink?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
