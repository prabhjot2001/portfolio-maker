import { X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-secondary/80 backdrop-blur-sm bg-opacity-50">
      <div className="max-w-md w-full p-2">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute top-4 right-4 hover:cursor-pointer"
          onClick={onClose}
        >
          <X />
        </Button>

        <div className="rounded-xl overflow-hidden">{children}</div>
      </div>

      {/* <div className="absolute inset-0" onClick={onClose} /> */}
    </div>
  );
};

export default Modal;
