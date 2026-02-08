import ODoc from "../../components/organisms/Doc";

export default function SDoc({ data }) {
  return <ODoc data={data.documentation} headData={data.head} />;
}
