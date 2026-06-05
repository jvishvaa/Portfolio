"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function InteractiveStats() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [gravity, setGravity] = useState(1);

  const stats = [
    {
      number: "2+",
      label: "Years\nExperience",
      color: "#0470c9",
      //   gradient: ["#6366f1", "#4f46e5"],
    },
    {
      number: "12k+",
      label: "Daily Users\nServed",
      color: "#cc0808",
    },
    {
      number: "10+",
      label: "Projects\nCompleted",
      color: "#ec4899",
    },
    {
      number: "3",
      label: "Companies\nWorked",
      color: "#f59e0b",
    },
    {
      number: "100%",
      label: "Client\nSatisfaction",
      color: "black",
    },
  ];

  const resetBalls = () => {
    if (!engineRef.current) return;
    const bodies = Matter.Composite.allBodies(engineRef.current.world);
    const width = renderRef.current?.options.width || 1000;

    bodies.forEach((body) => {
      if (body.label.startsWith("ball-")) {
        Matter.Body.setPosition(body, {
          x: Math.random() * (width - 300) + 150,
          y: Math.random() * 200 + 100,
        });
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);
      }
    });
  };

  const toggleGravity = () => {
    if (!engineRef.current) return;
    const newGravity = gravity === 1 ? -1 : 1;
    setGravity(newGravity);
    engineRef.current.gravity.y = newGravity;
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create engine
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1 },
    });
    engineRef.current = engine;

    // Get container dimensions
    const width = sceneRef.current.clientWidth;
    const height = 600;

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // THICK walls to prevent escape
    const wallThickness = 100;

    // Create VERY THICK walls (box boundaries) - balls CANNOT escape
    // Create INVISIBLE walls (box boundaries) - balls CANNOT escape
    const walls = [
      // Bottom
      Matter.Bodies.rectangle(
        width / 2,
        height - wallThickness / 2,
        width,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          label: "wall",
          chamfer: { radius: 10 },
        },
      ),
      // Top
      Matter.Bodies.rectangle(
        width / 2,
        wallThickness / 2,
        width,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          label: "wall",
          chamfer: { radius: 10 },
        },
      ),
      // Left
      Matter.Bodies.rectangle(
        wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          label: "wall",
          chamfer: { radius: 10 },
        },
      ),
      // Right
      Matter.Bodies.rectangle(
        width - wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          label: "wall",
          chamfer: { radius: 10 },
        },
      ),
    ];

    // Create balls with stats
    const radius = 80;
    const spacing = Math.min((width - 300) / stats.length, 160);

    const balls = stats.map((stat, index) => {
      const x = 150 + wallThickness / 2 + index * spacing;
      const y = 150 + (index % 2) * 100;

      return Matter.Bodies.circle(x, y, radius, {
        restitution: 0.4, // Bounciness
        friction: 0.01,
        frictionAir: 0.005,
        density: 0.04,
        render: {
          fillStyle: stat.color,
          strokeStyle: "#ffffff",
          lineWidth: 5,
        },
        label: `ball-${index}`,
        // Prevent balls from going too fast
        plugin: {
          wrap: {
            min: { x: wallThickness, y: wallThickness },
            max: { x: width - wallThickness, y: height - wallThickness },
          },
        },
      });
    });

    // Add mouse control with constraints
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.3,
        render: {
          visible: false,
        },
      },
    });

    // Limit ball velocity to prevent escape
    Matter.Events.on(engine, "beforeUpdate", () => {
      balls.forEach((ball) => {
        // Limit maximum velocity
        const maxSpeed = 15;
        const velocity = Matter.Body.getVelocity(ball);
        const speed = Matter.Vector.magnitude(velocity);

        if (speed > maxSpeed) {
          Matter.Body.setVelocity(ball, {
            x: (velocity.x / speed) * maxSpeed,
            y: (velocity.y / speed) * maxSpeed,
          });
        }

        // Keep balls strictly inside boundaries
        const pos = ball.position;
        const minX = wallThickness + radius;
        const maxX = width - wallThickness - radius;
        const minY = wallThickness + radius;
        const maxY = height - wallThickness - radius;

        if (pos.x < minX || pos.x > maxX || pos.y < minY || pos.y > maxY) {
          Matter.Body.setPosition(ball, {
            x: Math.max(minX, Math.min(maxX, pos.x)),
            y: Math.max(minY, Math.min(maxY, pos.y)),
          });
        }
      });
    });

    // Add all bodies to world
    Matter.Composite.add(engine.world, [...walls, ...balls, mouseConstraint]);

    // Run engine and renderer
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Canvas overlay for enhanced text
    const canvas = render.canvas;
    const context = canvas.getContext("2d")!;

    // Animation loop for enhanced text
    const drawText = () => {
      if (!context) return;

      balls.forEach((ball, index) => {
        const stat = stats[index];
        const pos = ball.position;

        context.save();
        context.translate(pos.x, pos.y);
        context.rotate(ball.angle);

        // Draw inner glow circle
        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, radius - 5, 0, Math.PI * 2);
        context.fill();

        // Draw number with shadow
        context.shadowColor = "rgba(0, 0, 0, 0.4)";
        context.shadowBlur = 10;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;

        context.fillStyle = "#ffffff";
        // context.font = "bold 56px var(--font-display), serif";
        context.font = "700 36px sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(stat.number, 0, -22);

        // Reset shadow for label
        context.shadowColor = "rgba(0, 0, 0, 0.4)";
        context.shadowBlur = 6;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;

        // Draw label with better visibility
        context.font = "700 16px sans-serif";
        context.fillStyle = "#ffffff";
        const lines = stat.label.split("\n");
        lines.forEach((line, i) => {
          context.fillText(line, 0, 20 + i * 22);
        });

        context.restore();
      });

      requestAnimationFrame(drawText);
    };
    drawText();

    // Handle resize
    const handleResize = () => {
      if (sceneRef.current && renderRef.current) {
        const newWidth = sceneRef.current.clientWidth;
        render.canvas.width = newWidth;
        render.options.width = newWidth;
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Impact & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-lg">
            Drag, throw, and play with the stats! Watch them bounce around with
            realistic physics.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={resetBalls}
              className="px-5 py-2.5 bg-gradient-to-r from-accent to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-sm font-semibold flex items-center gap-2 hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset
            </button>

            <button
              onClick={toggleGravity}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-sm font-semibold flex items-center gap-2 hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              {gravity === 1 ? "Reverse Gravity" : "Normal Gravity"}
            </button>
          </div>
        </div>

        {/* Physics Container */}
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={sceneRef}
            className="physics-container"
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              backgroundImage: "url(/board.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "3px solid rgba(99, 102, 241, 0.6)", // Thicker, more visible border
              outline: "2px solid rgba(139, 92, 246, 0.4)", // Optional: double border effect
              outlineOffset: "-6px",
            }}
          />

          {/* Instructions */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full shadow-lg border border-accent/30">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span className="text-sm font-semibold text-white">
                Click and drag to throw • Watch them bounce!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
