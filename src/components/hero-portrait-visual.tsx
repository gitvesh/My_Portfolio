"use client";

import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Bot, BrainCircuit, Cpu, Sparkles, Terminal } from "./icons";

export function HeroPortraitVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery tilt
  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const auraX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const auraY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);
  const hudTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const hudTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <div
      ref={containerRef}
      className="hero-portrait-stage"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* AMBIENT CYBER AURA */}
      <motion.div
        className="hero-ambient-aura"
        style={reduceMotion ? undefined : { x: auraX, y: auraY }}
      />

      {/* DYNAMIC ORBITAL RINGS */}
      <div className="hero-orbit orbit-a" />
      <div className="hero-orbit orbit-b" />

      {/* SATELLITE HUD NODES */}
      <motion.div
        className="hud-node hud-node-top"
        style={reduceMotion ? undefined : { x: hudTranslateX, y: hudTranslateY }}
      >
        <span className="hud-pip" />
        <span>SYSTEM // ACTIVE</span>
      </motion.div>

      <motion.div
        className="hud-node hud-node-bottom"
        style={reduceMotion ? undefined : { x: hudTranslateX, y: hudTranslateY }}
      >
        <Bot size={11} className="hud-icon" />
        <span>AUTONOMOUS AGENTS · RAG</span>
      </motion.div>

      {/* 3D TILT PHOTO FRAME */}
      <motion.div
        className="hero-tilt-card"
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        {/* RETICLE CORNERS */}
        <div className="reticle-corner corner-tl" />
        <div className="reticle-corner corner-tr" />
        <div className="reticle-corner corner-bl" />
        <div className="reticle-corner corner-br" />

        {/* SCANNER SWEEP ANIMATION */}
        <div className="scanner-line" />

        {/* MAIN PORTRAIT IMAGE */}
        <div className="hero-photo-wrap-inner">
          <Image
            src="/bhavesh-jadhav-v2.jpg"
            alt="Bhavesh Jadhav — AI Engineer & Builder"
            width={1050}
            height={1050}
            priority
            className="hero-photo-img"
            sizes="(max-width: 780px) 88vw, (max-width: 1100px) 43vw, 450px"
          />

          {/* SUBTLE DIGITAL SHIMMER & GRADIENT MASK */}
          <div className="photo-gradient-blend" />
          <div className="photo-cyber-grid" />
        </div>

        {/* GLASS HUD BAR AT BOTTOM */}
        <div className="portrait-hud-bar">
          <div className="hud-bar-left">
            <span className="live-status-dot" />
            <span className="hud-name">BHAVESH JADHAV</span>
            <span className="hud-sep">/</span>
            <span className="hud-title">AI ENGINEER</span>
          </div>
          <div className="hud-bar-right">
            <span>PUNE, IN</span>
          </div>
        </div>

        {/* HOVER BADGE */}
        <div className={`portrait-hover-badge ${isHovered ? "is-visible" : ""}`}>
          <Sparkles size={12} className="badge-sparkle" />
          <span>LEARN · BUILD · SOLVE</span>
        </div>
      </motion.div>

      {/* TECHNICAL COORDINATES */}
      <div className="hero-crosshair" />
      <div className="hero-coordinates">
        18°31&apos;N<br />
        73°51&apos;E
      </div>

      <div className="hero-visual-caption">
        <span>LEARN · BUILD</span>
        <span>SOLVE PROBLEMS</span>
      </div>
    </div>
  );
}
