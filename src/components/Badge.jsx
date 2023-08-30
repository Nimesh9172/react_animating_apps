import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return <motion.span animate={{scale:[0.8,1.2,1]}}  className="badge">{caption}</motion.span>;
}
