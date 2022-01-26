import React from "react";
import ItemList from "../../components/ItemList";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import content from "../../data/sweetsItems.json";

export default function index({ data }) {
  return (
    <Layout hero={false}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <ItemList item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination />
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const data = await content;

  return {
    props: { data },
  };
}
