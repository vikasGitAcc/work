export default function SixCircleIcon({
  size = 16,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top row */}
      <circle cx="4" cy="3.5" r="2.5" fill="currentColor" />
      <circle cx="12" cy="3.5" r="2.5" fill="currentColor" />

      {/* Middle row */}
      <circle cx="4" cy="8" r="2.5" fill="currentColor" />
      <circle cx="12" cy="8" r="2.5" fill="currentColor" />

      {/* Bottom row */}
      <circle cx="4" cy="12.5" r="2.5" fill="currentColor" />
      <circle cx="12" cy="12.5" r="2.5" fill="currentColor" />

      {/* Center dots */}
      <circle cx="4" cy="3.5" r="0.5" fill="white" />
      <circle cx="12" cy="3.5" r="0.5" fill="white" />

      <circle cx="4" cy="8" r="0.5" fill="white" />
      <circle cx="12" cy="8" r="0.5" fill="white" />

      <circle cx="4" cy="12.5" r="0.5" fill="white" />
      <circle cx="12" cy="12.5" r="0.5" fill="white" />

      {/* Crosshair lines */}
      <path
        d="M1.5 3.5H6.5M4 1V6M9.5 3.5H14.5M12 1V6
           M1.5 8H6.5M4 5.5V10.5M9.5 8H14.5M12 5.5V10.5
           M1.5 12.5H6.5M4 10V15M9.5 12.5H14.5M12 10V15"
        stroke="white"
        strokeWidth="0.7"
      />
    </svg>
  );
}