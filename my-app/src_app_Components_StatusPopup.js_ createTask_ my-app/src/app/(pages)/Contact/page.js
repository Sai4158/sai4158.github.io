"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import StatusPopup from "../Components/StatusPopup";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
// ... existing code ...
