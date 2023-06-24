import React, { useContext, useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import router from 'next/router';
import { AuthContext } from '../components/authContext';
import styles from './posts.module.css';
import Header from '../components/header';

type Post = {
  id: number;
  title: string;
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isAuthenticated, name } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const lastEl = useRef<any>(null);
  const observer: any = useRef(null);

  React.useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = () => {
    setIsLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: 10,
          _page: currentPage,
        },
      })
      .then((response) => {
        setPosts([...posts, ...response.data]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  console.log(currentPage)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setCurrentPage(page => page + 1)
      }
    });
    observer.current.observe(lastEl.current!);
  }, []);

  return (
    <div>
      <Header />
      <Typography className={styles.title}>Welcome, {name !== '' ? name : 'Unknown user'}</Typography>
      <Typography variant="h5">Posts:</Typography>
      <ul className={styles.postList}>
        {posts.map((post, index) => (
          <li key={post.id} className={styles.postItem}>
            <span className={styles.title}>{post.title}</span>
          </li>
        ))}
      </ul>
      <div ref={lastEl} style={{height: '1px'}}>
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Posts;
