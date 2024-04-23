import TreeMenu from "../../component/side/TreeMenu";
import { SampleData } from "./SampleData";

const MySide = () => {
  const data = SampleData;
  return (
    <>
      {data && data.map((item, index) => <TreeMenu props={item} key={index} />)}
    </>
  );
};
export default MySide;
