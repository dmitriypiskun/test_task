// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.scss';
import { Button, InputNumber } from '../ui';
import pLimit from 'p-limit';
import pThrottle from 'p-throttle';
import { getData } from '../services/api.service';
import { config } from '../config/config';

const REQUEST_COUNT = config.requestCount;

export function App() {
  const [count, setCount] = useState<number>();
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCountError, setIsCountError] = useState(false);

  const start = async () => {
    if (!count || count < 0 || count > 100) {
      setIsCountError(true);
      return;
    }

    setIsLoading(true);
    clear();

    const indexes = Array.from(Array(REQUEST_COUNT).keys());

    const limit = pLimit(count);
    const throttle = pThrottle({
      limit: count,
      interval: config.requestLimit,
    });

    try {
      const promises = indexes.map(item =>
        limit(
          throttle(() =>
            getData(item).then(result => {
              setData(prevData => [...prevData, result]);
            }),
          ),
        ),
      );
      await Promise.all(promises);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const clear = () => {
    setIsCountError(false);
    setData([]);
  };

  return (
    <div className={styles['container_wrapper']}>
      <div className={styles['container']}>
        <label>Number of requests:</label>
        <InputNumber value={count} max={100} isDisabled={isLoading} isError={isCountError} onChange={setCount} />
        <Button text="Start" isDisable={isLoading} onClick={start} />
      </div>

      {data.length !== 0 && (
        <div>
          <p>Result: </p>

          <ul>
            {data.map(item => (
              <li key={item}>Request # {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
