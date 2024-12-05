import React from "react";
import SectionHeading from "../shared/SectionHeading";
import { useSelector } from "react-redux";

const SettingsTab = () => {
  const User = useSelector((state) => state.auth);
  const userArray = User.user ? Object.values(User.user) : [];
  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Settings
      </h4>

      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          {/* table heading goes here */}
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Title
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Value
              </th>
            </tr>
          </thead>

          {/* this is table body */}
          <tbody>
            {/* row 1 */}
            {userArray.map((item, idx) => (
              <tr key={idx} className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Id
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsTab;
