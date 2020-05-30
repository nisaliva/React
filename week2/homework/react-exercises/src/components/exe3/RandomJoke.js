import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import axios from "axios";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => setJoke({ ...res.data }))
      .catch((e) => {
          setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {!error && <Joke setup={joke.setup} punchline={joke.punchline} />}
      {error && <p>Oh no! There is an error </p>}
    </div>
);
}