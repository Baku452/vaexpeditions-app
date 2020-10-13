const rating = [1, 2, 3, 4, 5];

function Rating({ number }) {
  return (
    <>
      {rating.map(item => (
        <div key={item} className={`circle ${item <= Number(number) ? 'active' : ''}`} />
      ))}
    </>
  );
}

export { Rating };
