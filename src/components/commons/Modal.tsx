import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog className="relative z-10" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-scroll md:overflow-hidden">
        <Dialog.Panel className="space-y-4 mx-auto w-full md:w-1/2 lg:w-1/3 rounded-3xl bg-white p-6 my-4">
          <Dialog.Title className="text-center font-bold text-lg">
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
