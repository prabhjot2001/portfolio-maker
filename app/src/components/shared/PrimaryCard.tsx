import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PrimaryCard = () => {
  return (
    <div className="border shadow-sm rounded-xl p-8 pl-6 flex flex-col gap-4 max-w-sm">
      <div className="w-full h-40">
        <img
          src="https://tedawf.com/_next/image?url=%2Ftv-tele-alerts.png&w=640&q=75"
          alt=""
          className="w-full h-40 rounded-sm object-cover"
        />
      </div>

      <div className={`space-y-2`}>
        <p className="font-semibold leading-none">
          AI powered notes taking web-app.
        </p>
        <p className="text-muted-foreground leading-4 text-xs">
          Real-time trading alerts with chart snapshots sent to Telegram,
          designed to keep traders informed and responsive to market changes
        </p>
      </div>
      <div className="mt-2 flex-wrap flex gap-2">
        <span className="bg-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          Elysia.js
        </span>
        <span className="bg-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          Elysia.js
        </span>
        <span className="bg-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          Elysia.js
        </span>
        <span className="bg-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          Elysia.js
        </span>
        <span className="bg-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          Elysia.js
        </span>
      </div>

      <div className="mt-2">
        <span className="bg-primary text-secondary text-xs font-medium flex items-center gap-2 max-w-max max-h-max px-2 rounded-md">
          <Link to={""}> </Link>
          Elysia.js 
          <ExternalLink className="w-3" />
        </span>
      </div>
    </div>
  );
};

export default PrimaryCard;
