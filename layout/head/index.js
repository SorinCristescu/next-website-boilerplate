import Head from "next/head";

const HeadComponent = (props) => {
  const { title, metaContent } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={metaContent} />
    </Head>
  );
};

export default HeadComponent;
