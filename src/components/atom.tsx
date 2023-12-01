"use client";

//style
import "./atom.css";

export default function Atom() {
  return (
    <div className="relative h-full atom">
      <div className="logomasthead relative">
        <div className="stroke stroke-3">
          <div className="sphere sphere-4"></div>
          <div className="sphere sphere-5"></div>
        </div>
        <div className="stroke stroke-2">
          <div className="sphere sphere-2"></div>
          <div className="sphere sphere-3"></div>
        </div>
        <div className="stroke stroke-1">
          <div className="sphere sphere-1 bg-indigo-500	"></div>
        </div>
        <div className="sphere sphere-center"></div>
      </div>
    </div>
  );
}
