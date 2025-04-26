"use client";

import { useCallback, useEffect, useRef } from "react";

import IconAlert from "../../icons/IconAlert";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  const handleTab = useCallback((e: KeyboardEvent) => {
    if (!modalRef.current || !cancelButtonRef.current || !confirmButtonRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden";
      // Focus the cancel button when modal opens
      setTimeout(() => cancelButtonRef.current?.focus(), 50);
      // Add keyboard listener for focus trap
      document.addEventListener("keydown", handleTab);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleTab);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleTab);
    };
  }, [isOpen, handleTab]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{ opacity: isOpen ? 0.5 : 0 }}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: `scale(${isOpen ? 1 : 0.95})`,
          }}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <IconAlert />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900" id="modal-title">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
            <button
              ref={cancelButtonRef}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer"
              onClick={onClose}
            >
              {cancelText}
            </button>
            <button
              ref={confirmButtonRef}
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md cursor-pointer"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
