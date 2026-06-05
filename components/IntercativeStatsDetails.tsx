"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function InteractiveStatsDetails() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [gravity, setGravity] = useState(1);
  const [selectedBallIndex, setSelectedBallIndex] = useState<number | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);

  const stats = [
    {
      number: "2+",
      label: "Years\nExperience",
      color: "#0470c9",
      fullTitle: "Years of Experience",
      description:
        "Professional software development experience across multiple companies and projects",
    },
    {
      number: "12k+",
      label: "Daily Users\nServed",
      color: "#cc0808",
      fullTitle: "Daily Users Served",
      description:
        "Active users engaging with applications I've built and maintained daily",
    },
    {
      number: "10+",
      label: "Projects\nCompleted",
      color: "#ec4899",
      fullTitle: "Projects Completed",
      description:
        "Successfully delivered full-stack projects from concept to production",
    },
    {
      number: "3",
      label: "Companies\nWorked",
      color: "#f59e0b",
      fullTitle: "Companies Worked With",
      description:
        "Organizations including K12 Techno Services, Ylurn Technology, and Eduvisory",
    },
    {
      number: "100%",
      label: "Client\nSatisfaction",
      color: "black",
      fullTitle: "Client Satisfaction",
      description:
        "Consistent positive feedback and successful project outcomes",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        Matter.Body.setAngle(body, 0);
      }
    });
    setSelectedBallIndex(null);
  };

  const toggleGravity = () => {
    if (!engineRef.current) return;
    const newGravity = gravity === 1 ? -1 : 1;
    setGravity(newGravity);
    engineRef.current.gravity.y = newGravity;
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1 },
    });
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = isMobile ? 500 : 600;

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

    const wallThickness = isMobile ? 60 : 100;

    const walls = [
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

    const radius = isMobile ? 60 : 80;
    const spacing = Math.min(
      (width - 200) / stats.length,
      isMobile ? 120 : 160,
    );

    const balls = stats.map((stat, index) => {
      const x = wallThickness + radius + index * spacing;
      const y = 150 + (index % 2) * (isMobile ? 60 : 100);

      return Matter.Bodies.circle(x, y, radius, {
        restitution: 0.4,
        friction: 0.1,
        frictionAir: 0.02,
        frictionStatic: 0.5,
        density: 0.04,
        inertia: Infinity,
        slop: 0.05,
        render: {
          fillStyle: stat.color,
          strokeStyle: "#ffffff",
          lineWidth: isMobile ? 3 : 5,
        },
        label: `ball-${index}`,
      });
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.3,
        render: { visible: false },
      },
    });

    Matter.Events.on(mouseConstraint, "startdrag", (event: any) => {
      const body = event.body;
      if (body && body.label && body.label.startsWith("ball-")) {
        const index = parseInt(body.label.split("-")[1]);
        setSelectedBallIndex(index);
      }
    });

    Matter.Events.on(engine, "beforeUpdate", () => {
      balls.forEach((ball) => {
        Matter.Body.setAngularVelocity(ball, 0);
        Matter.Body.setAngle(ball, 0);

        const maxSpeed = 15;
        const velocity = Matter.Body.getVelocity(ball);
        const speed = Matter.Vector.magnitude(velocity);

        if (speed > maxSpeed) {
          Matter.Body.setVelocity(ball, {
            x: (velocity.x / speed) * maxSpeed,
            y: (velocity.y / speed) * maxSpeed,
          });
        }

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

    Matter.Composite.add(engine.world, [...walls, ...balls, mouseConstraint]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const canvas = render.canvas;
    const context = canvas.getContext("2d")!;

    const drawText = () => {
      if (!context) return;

      balls.forEach((ball, index) => {
        const stat = stats[index];
        const pos = ball.position;

        context.save();
        context.translate(pos.x, pos.y);

        // if (selectedBallIndex === index) {
        //   context.strokeStyle = "#fbbf24";
        //   context.lineWidth = isMobile ? 5 : 8;
        //   context.beginPath();
        //   context.arc(0, 0, radius + (isMobile ? 6 : 10), 0, Math.PI * 2);
        //   context.stroke();

        //   context.strokeStyle = "rgba(251, 191, 36, 0.5)";
        //   context.lineWidth = isMobile ? 8 : 12;
        //   context.beginPath();
        //   context.arc(0, 0, radius + (isMobile ? 10 : 15), 0, Math.PI * 2);
        //   context.stroke();
        // }

        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, radius - 5, 0, Math.PI * 2);
        context.fill();

        context.shadowColor = "rgba(0, 0, 0, 0.4)";
        context.shadowBlur = isMobile ? 6 : 10;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;

        context.fillStyle = "#ffffff";
        context.font = `700 ${isMobile ? "24px" : "36px"} sans-serif`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(stat.number, 0, isMobile ? -16 : -22);

        context.shadowBlur = isMobile ? 4 : 6;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;

        context.font = `700 ${isMobile ? "11px" : "16px"} sans-serif`;
        context.fillStyle = "#ffffff";
        const lines = stat.label.split("\n");
        lines.forEach((line, i) => {
          context.fillText(
            line,
            0,
            (isMobile ? 14 : 20) + i * (isMobile ? 16 : 22),
          );
        });

        context.restore();
      });

      requestAnimationFrame(drawText);
    };
    drawText();

    const handleResize = () => {
      if (sceneRef.current && renderRef.current) {
        const newWidth = sceneRef.current.clientWidth;
        render.canvas.width = newWidth;
        render.options.width = newWidth;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      <div className="px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4">
            Impact & Achievements
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4 md:mb-6 text-sm md:text-base lg:text-lg px-2">
            Drag, throw, and play with the stats! Click on a ball to see
            details.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <button
              onClick={resetBalls}
              className="px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-accent to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-xs md:text-sm font-semibold flex items-center gap-2 hover:scale-105"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4"
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
              className="px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-xs md:text-sm font-semibold flex items-center gap-2 hover:scale-105"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4"
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
              <span className="hidden sm:inline">
                {gravity === 1 ? "Reverse Gravity" : "Normal Gravity"}
              </span>
              <span className="sm:hidden">Gravity</span>
            </button>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_350px] gap-4 md:gap-6">
            {/* Physics Container */}
            <div
              ref={sceneRef}
              className="physics-container"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
                backgroundImage: "url(/space.avif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: "2px solid rgba(99, 102, 241, 0.6)",
                outline: "1px solid rgba(139, 92, 246, 0.4)",
                outlineOffset: "-4px",
              }}
            />

            {/* Info Panel - Desktop Only */}
            <div className="info-panel-fixed hidden lg:block">
              <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl border-2 border-accent/30 p-5 h-[600px] flex flex-col">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Details
                </h3>

                <div className="flex-1 overflow-hidden relative">
                  <div className="space-y-2.5">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className={`info-item-compact ${selectedBallIndex === index ? "info-item-visible" : "info-item-hidden"}`}
                        style={{ borderLeftColor: stat.color }}
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-md"
                            style={{ backgroundColor: stat.color }}
                          >
                            <span className="text-white font-bold text-sm">
                              {stat.number}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm mb-0.5 leading-tight">
                              {stat.fullTitle}
                            </h4>
                            <p className="text-gray-300 text-xs leading-relaxed">
                              {stat.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedBallIndex === null && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/95 backdrop-blur-sm rounded-xl">
                      <div className="text-center p-4">
                        <svg
                          className="w-12 h-12 text-gray-600 mx-auto mb-3"
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
                        <p className="text-gray-400 text-xs font-medium">
                          Click a ball to reveal details
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 md:mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full shadow-lg border border-accent/30">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-accent"
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
              <span className="text-xs md:text-sm font-semibold text-white">
                {isMobile
                  ? "Drag to throw!"
                  : "Click and drag to throw • Watch them bounce!"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
