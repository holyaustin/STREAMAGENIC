import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@livepeer/react';
import logo from '../../../public/images/logoonly.png';
import styles from '../../styles/Assets.module.css';

export default function GetStreamById() {
  const [streamId, setStreamId] = useState('');
  const [getStreamInfo, setGetStreamInfo] = useState('');

  async function getStream(e) {
    e.preventDefault();
    const res = await fetch(`/api/stream/${streamId}`);

    const data = await res.json();

    setGetStreamInfo(data);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Get Stream By Id</h1>

      <form onSubmit={getStream} method='GET' className={styles.card}>
        <label htmlFor='asset' className='text-base'>
          Stream ID:{' '}
        </label>
        <input
          className='border rounded-md text-base mx-2'
          type='search'
          name='query'
          value={streamId}
          required
          onChange={(e) => setStreamId(e.target.value)}
        />
        <button
          type='submit'
          className='m-0  rounded-md p-1 bg-blue-600 hover:bg-blue-400 text-base text-white'
        >
          Get Stream
        </button>
      </form>

      {!getStreamInfo ? null : (
        <div className={styles.card} key={getStreamInfo.id}>
          <Link href={`/streams/${getStreamInfo.id}`}>
            {getStreamInfo.isActive ? (
              <a>
                <Player
                  playbackId={`${getStreamInfo.playbackId}`}
                  autoPlay={false}
                  width={200}
                  loop
                  muted
                />
                <p>Stream Status:</p>
                <p className={styles.ready}>Live Now!</p>
                <p> {getStreamInfo.name} </p>
              </a>
            ) : (
              <a>
                <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
                <h2> {getStreamInfo.name} </h2>
                <p>Stream Status:</p>
                <p className={styles.failed}>Not Live</p>
              </a>
            )}
          </Link>
        </div>
      )}
    </main>
  );
}
