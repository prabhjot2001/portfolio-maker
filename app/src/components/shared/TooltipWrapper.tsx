import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

enum sides {
  "top",
  bottom,
  left,
  right,
}
type propsType = {
  children: React.ReactNode;
  message: string;
  side?: sides;
};
const TooltipWrapper = ({ children, message, side = sides.top }: propsType) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipWrapper;
