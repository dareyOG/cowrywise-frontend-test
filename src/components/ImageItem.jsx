function ImageItem({ image }) {
  return (
    <li className="list-none transition ease-in-out">
      <picture className="relative">
        <source
          media="(min-width:1024px)"
          srcSet={`${image.urls.raw}&w=1024&dpr=2`}
          type="image/jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet={image.urls.regular}
          type="image/jpg"
        />
        <img
          src={image.urls.small}
          alt={image.description}
          className="border border-transparent rounded-[1rem]"
        />
        <figcaption className="absolute bottom-5 left-5 text-infoText ">
          <div>{image.user.name}</div>
          <div className="text-[1.3rem]">{image.user.location}</div>
        </figcaption>
      </picture>{' '}
    </li>
  );
}

export default ImageItem;
