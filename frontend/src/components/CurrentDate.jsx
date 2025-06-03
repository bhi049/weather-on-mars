const CurrentDate = () => {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <p className="hero-date">{today}</p>
};

export default CurrentDate;