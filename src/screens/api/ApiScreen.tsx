import { Fragment } from "react/jsx-runtime";
import { BaseScreen } from "../BaseScreen";
import { LoadingScreen } from "../LoadingScreen";
import { useGetProvinces } from "./querys/api.query";
import { IApiReqDto } from "./querys/dto/request/IApiReqDto";
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export function ApiScreen() {
  const { isLoading, data } = useGetProvinces(new IApiReqDto("label", 10, 0));

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <BaseScreen title="Api">
      <Fragment>
      <JsonView data={data || {}} shouldExpandNode={allExpanded} style={defaultStyles} />
      </Fragment>
    </BaseScreen>
  );
}
