import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        variants={{
          hidden: { opacity: 0, y: -100,transition: {
            type: 'tween',duration:.2
          }},
          visible: { opacity: 1, y: 0 },
        }}
        className="modal"
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: "spring", stiffness:300}}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
