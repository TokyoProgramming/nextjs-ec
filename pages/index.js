import Layout from "../components/Layout";
import Notification from "../components/Notification";
import Pagination from "../components/Pagination";
import Recommend from "../components/Recommend";
import content from "../data/sweetsItems.json";

export default function Home({ data }) {
  return (
    <Layout>
      <Notification />
      <Recommend name={"おすすめ商品"} data={data} />
      <Recommend name={"新着商品"} data={data} />
      <div className="flex justify-center mt-2">
        <Pagination />
      </div>
      <Recommend name={"最近チェックした商品"} data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await content;

  return {
    props: { data },
  };
}
