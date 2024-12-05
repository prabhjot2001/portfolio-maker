import { X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  // useEffect(() => {
  //   // Disable background scroll when the modal is open
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Clean up: reset overflow when modal is closed
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-secondary-foreground/50 backdrop-blur-sm">
      <div className="max-w-md w-full p-2">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute top-4 right-4 hover:cursor-pointer text-primary"
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
