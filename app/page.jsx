import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Temukan & Bagikan
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Prompt yang Didukung AI</span>
    </h1>
    <p className='desc text-center'><b>PromptLah</b> adalah alat yang dibuat untuk memudahkan pengguna untuk menemukan, membuat, dan berbagi prompt kreatif.
    </p>

    <Feed />
  </section>
);

export default Home;
