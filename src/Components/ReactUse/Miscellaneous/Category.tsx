import CategoryFrame from "../CategoryFrame";

import EnsuredForwardedRef from "./EnsuredForwardedRef";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="Miscellaneous"
    contents={[
      { name: "useEnsuredForwardedRef", body: EnsuredForwardedRef },
    ]}
  />
);

export default Category;
