import { useEffect, useState } from 'react';
import { StaggeredGrid, StaggeredGridItem } from 'react-staggered-grid';
import ImageItem from './ImageItem';

function Images({ query }) {
  const [images, setImages] = useState([]);
  useEffect(
    function () {
      async function getImage() {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_SOME_KEY
          }&order_by=latest&per_page=8&orientation=portrait&query=${query}`
        );
        const data = await res.json();
        console.log(data.results);
        setImages(data.results);
      }
      if (query.length < 3) return;
      getImage();
    },
    [query]
  );

  return (
    <ul className="relative top-[-7rem]">
      <StaggeredGrid
        columnWidth={450}
        columns={0}
        alignment={1}
        horizontalGap={40}
        verticalGap={20}
        fitHorizontalGap={true}
        style={{ margin: '0 15rem' }}
      >
        {images.map((image, index) => (
          <StaggeredGridItem key={image + index} index={index}>
            <ImageItem image={image} />
          </StaggeredGridItem>
        ))}
      </StaggeredGrid>
    </ul>
  );
}

export default Images;
