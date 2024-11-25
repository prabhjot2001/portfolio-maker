import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
type propsType = {
  children: React.ReactNode;
  message: string;
};
const TooltipWrapper = ({ children, message }: propsType) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipWrapper;
