import { useEffect, useState } from 'react';
import { StaggeredGrid, StaggeredGridItem } from 'react-staggered-grid';
import ImageItem from './ImageItem';

function Images({ query, setIsModal }) {
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
    <ul className="relative top-[-3rem] xl:mx-[13.5rem]">
      <StaggeredGrid
        columnWidth={350}
        columns={0}
        alignment={1}
        horizontalGap={40}
        verticalGap={40}
        fitHorizontalGap={true}
      >
        {images.map((image, index) => (
          <StaggeredGridItem key={image + index} index={index}>
            <ImageItem image={image} setIsModal={setIsModal} />
          </StaggeredGridItem>
        ))}
      </StaggeredGrid>
    </ul>
  );
}

export default Images;
