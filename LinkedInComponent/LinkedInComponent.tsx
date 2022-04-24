import React, { Fragment, useEffect, useState } from 'react';

const fetchDog = async (setDogUrl) => {

  try {
    const dogData = await fetch('https://dog.ceo/api/breeds/image/random')
    const dog = await dogData.json()
    setDogUrl(dog.message);
  } catch (error) {
    console.log(error);
  }
};

export default () => {
  const [data, setData] = useState({symbols:[]});
  const [ dogUrl, setDogUrl ] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch('https://api.binance.com/api/v3/exchangeInfo');
        const d = await result.json()
        setData(d);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <button onClick={() => fetchDog(setDogUrl)}>Display dog</button>
      <br />
      <img style={{width: '70%'}}src={dogUrl} />
      {isError && <div>Something went wrong ...</div>}
      {data.symbols.map((s, i) => <div>{i + ' ' + s.symbol + ' ' + s.status}</div>)}
      {isLoading ? <div>Loading ...</div> : <div />}
    </Fragment>
  );
};
