interface IProps {
  children?: JSX.Element;
  title?: string;
}
export function BaseScreen({ children, title }: IProps) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[70%] h-full flex flex-col gap-2">
        {title && <h1 className="text-2xl font-semibold">{title}</h1>}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
