import { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState<any>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section>
      <h1>tired of boring lorem ipusm?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraph: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          min={0}
          max={8}
          value={count}
          onChange={(e: any) => setCount(e.target.value)}
        />
        <button type='submit'>generante</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
