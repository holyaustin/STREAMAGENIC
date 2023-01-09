import { FormEvent, useState } from 'react'
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Form.module.css';


export default function CreateStream() {

  const router = useRouter();
  const [ streamName, setStreamName ] = useState<string>( '' );
  const profiles = [
    {
      name: '720p',
      bitrate: 2000000,
      fps: 30,
      width: 1280,
      height: 720,
    },
    {
      name: '480p',
      bitrate: 1000000,
      fps: 30,
      width: 854,
      height: 480,
    },
    {
      name: '360p',
      bitrate: 500000,
      fps: 30,
      width: 640,
      height: 360,
    },
  ];
  
  async function createNewStream( e: FormEvent ) {
    e.preventDefault();
  try {
    const response = await fetch('/api/createStream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: streamName,
        profiles,
      }),
    });
    
    setStreamName( '' );
    router.push('/livestream/getStreams')

    const data = await response.json();
  } catch (error) {
    // console.log(error);
  }
}

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Create a New Stream</h1>
      <form onSubmit={createNewStream} method='POST' className={styles.card}>
        <label htmlFor='stream'>Stream Name: </label>
        <input
          className='border rounded-md text-base mx-2'
          type='text'
          value={streamName}
          name='name'
          required
          onChange={(e) => setStreamName(e.target.value)}
        />
        <br />
        <button type='submit'>Create Stream</button>
      </form>
    </div>
  );
}
