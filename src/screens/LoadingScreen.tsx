import { CircularProgress } from "@nextui-org/react";
import { BaseScreen } from "./BaseScreen";

export function LoadingScreen() {
  return (
    <BaseScreen>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <CircularProgress />
      </div>
    </BaseScreen>
  );
}
