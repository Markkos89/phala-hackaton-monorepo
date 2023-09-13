import React, { useRef } from "react";
import { Dispatch, SetStateAction, PropsWithChildren } from "react";

function BottomDrawer({
  state,
  setState,
  children,
}: PropsWithChildren<{ state: boolean; setState: Dispatch<SetStateAction<boolean>> }>) {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        state ? "bottom-0" : "bottom-5"
      } transition-transform transform ${state ? "translate-y-0" : "translate-y-full"} ease-in-out duration-500 `}
      ref={drawerRef}
    >
      <div className="fixed inset-0 w-full h-full bg-none" onClick={() => setState(false)}></div>
      <div className="flex items-end min-h-screen px-4 lg:pb-16 -bottom-2">
        <div className="relative w-full max-w-5xl p-4 mx-auto gradient-blur rounded-t-3xl lg:rounded-b-3xl shadow-2xl">
          <div className="max-w-5xl mx-auto py-3 space-y-3 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default BottomDrawer;
