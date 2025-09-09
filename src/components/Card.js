function Card(props) {
  const publicUrl = process.env.PUBLIC_URL || '';
  const imgSrc = `${publicUrl}/img/${props.img}`;
  const fallbackSrc = `${publicUrl}/img/img1.png`;

  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img
          alt="card-img"
          src={imgSrc}
          onError={(e) => {
            if (e.currentTarget.src !== fallbackSrc) {
              e.currentTarget.src = fallbackSrc;
            }
          }}
          className="text-center img-fluid"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
