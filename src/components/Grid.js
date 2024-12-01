import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import '../index.css';

const Grid = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className='grid-container'>
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
