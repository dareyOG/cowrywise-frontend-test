import { useEffect, useState } from 'react';
import {
  // StaggeredDisplay,
  StaggeredGrid,
  StaggeredGridItem,
  // StaggeredItemSpan,
} from 'react-staggered-grid';
// import ImageItem from './ImageItem';

function Images({ query }) {
  const [images, setImages] = useState([]);
  useEffect(
    function () {
      async function getImage() {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_SOME_KEY
          }&order_by=latest&per_page=8&query=${query}`
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
  return null;
  // <StaggeredGrid
  //   // display={StaggeredDisplay.Grid}
  //   items={images}
  //   render={(image, i) => {
  //     const style = {
  //       width: item.width,
  //       height: item.height + 'px',
  //       // background: 'skyblue',
  //       textAlign: 'center',
  //       // lineHeight: item.height + 'px',
  //       margin: '8px',
  //     };
  //     <StaggeredGridItem
  //       index={i}
  //       key={i}
  //       spans={image.span || ''}
  //       style={{ transition: 'transform 0.3s ease' }}
  //     >
  //       <div style={{ style }}>{}</div>
  //     </StaggeredGridItem>;
  //   }}
  // />
}

export default Images;

{
  /* <ul className="grid grid-cols-imageContainer px-[10rem]">
{images.map(image => (
  <ImageItem image={image} key={image.id} />
))}
</ul> */
}
