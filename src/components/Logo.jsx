export default function Logo({ size = 36, light = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill={light ? '#ffffff' : '#0f8a7e'} />
      <path
        d="M12 11v18M28 11v18M12 20h16M20 11c0-2.5 2-4 4-4M20 11c0-2.5-2-4-4-4"
        stroke={light ? '#0f8a7e' : '#ffffff'}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
