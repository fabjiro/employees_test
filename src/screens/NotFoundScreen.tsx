import { Button } from "@nextui-org/react";
import { BaseScreen } from "./BaseScreen";
import { useNavigate } from "react-router-dom";

interface IProps {
  description?: string;
}
export function NotFoundScreen({ description }: IProps) {
  const navigate = useNavigate();
  return (
    <BaseScreen>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">{description}</h1>
        <Button onPress={() => navigate("/")} color="primary" variant="flat">
          Ir al inicio
        </Button>
      </div>
    </BaseScreen>
  );
}
