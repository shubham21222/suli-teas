export async function getServerSideProps() {
    const res = await fetch(
      "https://www.controlf5.co.in/client-demo/mycaradvocate/wp-json/wp/v2/posts",
      { cache: 'no-store' }
    );
    const posts = await res.json();
  
    return {
      props: {
        posts, // Will be passed to the component as props
      },
    };
  }

  export default Page;