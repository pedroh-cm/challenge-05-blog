import Link from "next/link";
import ptBR from "date-fns/locale/pt-BR";
import { Head } from "next/document";
import { useState } from "react";
import { format } from "date-fns";
import { FiCalendar, FiUser } from 'react-icons/fi';

import { Post } from "../../pages";

import styles from "./home.module.scss";
import commonStyles from '../../styles/common.module.scss';

interface HomeProps {
  postsPagination: {
    next_page: string;
    results: Post[];
  };
}

export function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={commonStyles.container}>
        <div className={styles.posts}>
          {postsPagination.results.map(post => (
            <Link href={`/post/${post.uid}`} key={post.uid}>
              <a className={styles.post}>
                <strong>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>
                <ul>
                  <li>
                    <FiCalendar />
                    {post.first_publication_date}
                  </li>
                  <li>
                    <FiUser />
                    {post.data.author}
                  </li>
                </ul>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
