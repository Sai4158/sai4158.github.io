"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const StatusPopup = ({ type, message, onClose }) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/20 border border-white/10 rounded-xl shadow-lg p-8 max-w-md w-full text-center relative"
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex flex-col items-center">
              {isSuccess ? (
                <FaCheckCircle className="text-green-400 text-5xl mb-4" />
              ) : (
                <FaExclamationCircle className="text-red-400 text-5xl mb-4" />
              )}
              <h3
                className={`text-2xl font-light mb-2 ${
                  isSuccess ? "text-green-300" : "text-red-300"
                }`}
              >
                {isSuccess ? "Success!" : "Error"}
              </h3>
              <p className="text-white/80">{message}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusPopup;
