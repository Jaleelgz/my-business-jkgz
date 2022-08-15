import Head from "next/head";
import Image from "next/image";
import Home from "../components/Home/Home";
import styles from "../styles/Home.module.css";

export default function MainHome({ business }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>JKGZ</title>
        <meta name="description" content="JKGZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Home business={business} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/FOZICS.png" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const business = await fetch(
    "https://www.slotify.app/api/bookme/businesses/url/jkgz"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return {
    props: {
      business,
    },
  };
};
