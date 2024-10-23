function ImageItem({ image }) {
  return (
    <li className="border rounded-md">
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
        <img src={image.urls.small} alt={image.description} />
        <figcaption className="absolute bottom-0 left-0 ">
          <div className="text-[#fff] text-[2rem]">{image.user.name}</div>
          <div>{image.location}</div>
        </figcaption>
      </picture>{' '}
    </li>
  );
}

export default ImageItem;
