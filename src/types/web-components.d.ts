/// <reference path="@types/react" />

declare namespace JSX {
  interface LikeButtonAttributes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    photoId: Number;
  }
  interface IntrinsicElements {
    "photo-carousel": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    "photo-add": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    "like-button": LikeButtonAttributes;
  }
}